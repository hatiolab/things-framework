Ext.Loader.setConfig({
	enabled : true,
	paths : {
		'Frx' : 'assets/frx',
		'ux' : 'assets/ux'
	},
	bundleRoot : 'assets/bundle/'
});

Ext.define('App.util.AppBaseUrl', {

	singleton : true,

	alternateClassName : 'AppBaseUrl',

	requires : ['Ext.Ajax'],
 
	constructor : function(config) {
		Ext.Ajax.on('beforerequest', this.onBeforeAjaxRequest, this);
		//Ext.Ajax.on('requestexception', this.onAjaxException, this);
	},

	/*onAjaxException : function(conn, resp, options, eOpts) {
		// 0. 401 에러 체크 
		if(resp.status != 401) {
			return;
		}

		// 1. Popup

		// 2. login 호출 

		// 3. global variable - login, current domain 정보 수정 
	},*/
 
	/**
	 * Before Ajax Request
	 */
	onBeforeAjaxRequest : function(connection, options) {
		var basicServiceUrl = this.getBasicRestServiceUrl();

		if(!basicServiceUrl) {
			return;
		}

		if(options && options.method == 'PUT' && options.action == 'update') {
			this.hookRestUpdate(options);

		//} else if(options && options.method == 'GET' && options.url == 'download') {
		//	basicServiceUrl = basicServiceUrl.substr(0, basicServiceUrl.lastIndexOf('rest/'));

		} else if(options && options.method == 'GET' && options.action == 'read' && options.params && !options.params.id) {
			this.hookRestSearch(options.params); 

		} else if(options && options.scope && options.scope.id && options.scope.id == 'Base.controller.rest.RestItem' && (options.method == 'POST' || options.method == 'PUT')) {
			this.hookRestPostPut(options);
		}

		if(options.url.length > 0 && options.url[0] == '/') {
			options.url = options.url.substr(1);
		}
		
		options.url = basicServiceUrl + options.url;
	},

	getBasicRestServiceUrl : function() {
		var useRemoteServer = HF.setting.get('setting-use_remote_server');
		var restServiceHost = HF.setting.get('setting-rest_service_host');
		
		if(useRemoteServer && restServiceHost) {	
			var basicServiceUrl = HF.setting.get('setting-basic_service_url');
			return restServiceHost + basicServiceUrl; 
		} else {
			return '';
		}
	},

	/**
	 * Post 요청시 hooking
	 */
	hookRestPostPut : function(options) {
		var paramStr = options.params;
		delete options['params'];
		options.jsonData = paramStr;
	},

	/**
	 * Update 요청시 hooking
	 */
	hookRestUpdate : function(options) {
		if(options.scope && options.scope.writer && options.scope.writer.root) {
			var rootName = options.scope.writer.root;
			var jsonData = options.jsonData[rootName];
			if(jsonData) {
				Ext.Array.each(['creator', 'updater', 'creator_id', 'created_at', 'updater_id', 'updated_at'], function(key) {
					delete jsonData[key];
				});
				options.jsonData = jsonData;
			}
		}
	},

	/**
	 * Search 요청시 hooking
	 */
	hookRestSearch : function(params) {
		if(params._s && params._s != '') {
			this.convertSelectFields(params);
		}

		if(params.sort && params.sort != '') {
			this.convertSortConditions(params);
		} 

		this.convertSearchConditions(params);
	},

	/**
	 * select fields camelcase로 변환 
	 */
	convertSelectFields : function(params) {
		var oriSelects = params._s.substr(1, params._s.length - 2);
		delete params['_s'];
		var selectArr = oriSelects.split(',');
		params.select = '';

		for(var i = 0 ; i < selectArr.length ; i++) {
			var selectField = selectArr[i];
			if(selectField != 'domain') {
				if(params.select.length > 0) {
					params.select += ',';
				}

				params.select += HF.camelize(selectField);
			}
		}
	},

	/**
	 * sort condition 변환 
	 * [{"property":"updated_at","direction":"ASC"}] ==> [{"name":"updatedAt","dir":"ASC"}] 형식으로 변환 
	 */
	convertSortConditions : function(params) {
		if(params.sort && params.sort != '') {
			var sortArr = Ext.JSON.decode(params.sort);

			for(var i = 0 ; i < sortArr.length ; i++) {
				var sortObj = sortArr[i];
				var fieldName = HF.camelize(sortObj.property);
				var direction = sortObj.direction;
				//sortObj['name'] = fieldName;
				//sortObj['dir'] = direction;
				sortObj['field'] = fieldName;
				sortObj['ascending'] = (direction == 'ASC');				
				delete sortObj['property'];
				delete sortObj['direction'];
			}

			params.sort = Ext.JSON.encode(sortArr);
		}
	},

	/**
	 * search conditions 변환 
	 */
	convertSearchConditions : function(params) {
		var searchKeys = this.extractSearchConditions(params);

		if(searchKeys && searchKeys.length > 0) {
			var query = [];

			for(var i = 0 ; i < searchKeys.length ; i++) {
				var key = searchKeys[i];

				if(!this.skipConvertSearchCondition(params, key)) {
					var prop = key.substr(3, key.length - 4);
					query.push(this.convertSearchCondition(params, prop, params[key]));
				}

				delete params[key];
			}

			if(query.length > 0) {
				params.query = '[' + query.join(',') + ']';
			}
		}
	},

	/**
	 * 검색 조건 변환 스킵 여부  
	 */
	skipConvertSearchCondition : function(params, propName) {
		var skip = false;

		if(!params[propName]) {
			skip = true;
		}

		if(skip == true) {
			Ext.Array.each(['is_null]', 'is_not_null]', 'is_true]', 'is_false]', 'is_present]', 'is_blank]'], function(key) {
				if(propName.indexOf(key, propName.length - key.length) !== -1) {
					skip = false;
				} 
			});
		}

		return skip;
	},

	/**
	 * search condition 변환 
	 * {_q[entity_type-eq] : 'abc'} 형식의 파라미터를 {'name' : 'entityType', 'operator' : 'eq', 'value' : 'abc'} 형식의 문자열로 변환 
	 */
	convertSearchCondition : function(params, prop, value) {
		var propArr = prop.split('-');
		var operator = propArr[1] || 'eq';
		var name = HF.camelize(propArr[0]);
		value = (value == undefined) ? null : value;
		return '{"name":"' + name + '", "operator":"' + operator + '", "value":"' + value + '"}';
	},

	/**
	 * Search Condition Key를 추출 
	 */
	extractSearchConditions : function(params) {
		var searchKeys = [];

		for(var key in params) {
			if(!params.hasOwnProperty(key)) continue;

			// '_q['로 시작하면 ...
			if(key.lastIndexOf('_q[', 0) === 0) {
				searchKeys.push(key);
			}
		}

		return searchKeys;
	}
});

Ext.require(['App.Framework', 'App.util.AppBaseUrl']);

Ext.onReady(function() {
	Ext.application({
		appFolder: 'assets/app-std',
	    
	    autoCreateViewport: true,

	    name: 'App',

		controllers : Ext.Array.merge(['ApplicationController'], App.bundleControllers),

	    launch: function() {
		}
	});
});
