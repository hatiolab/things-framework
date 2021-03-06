Ext.define('Base.view.entity.EntityNameCombo', {
	extend : 'Ext.form.field.ComboBox',
	
	xtype : ['entitynamecombo'],

    anchor: '100%',

	/**
	 * 쿼리에 영향을 주는 필드 리스트
	 */
	associationField : [],

	/**
	 * Store 대신 Custom Selection을 사용하는 경우 CustomSelection의 name을 설정
	 */
	customSelectionUrl : '',

	config : {
		valueField : 'id',
		displayField : 'name',

		queryMode : 'remote',
		
	    minChars : 1, 
	    typeAhead : true,
		queryParam : '_q[name-like]',
		pageSize : 25
	},

    listConfig: {
        loadingText: T('text.Searching'),
        emptyText: T('text.No matching data found'),
		minWidth : 300,
		itemTpl : '<span>{name}</span>{description}'
    },
	
	initComponent : function() {
		if(this.storeClass) {
			this.store = Ext.create(this.storeClass, {
				pageSize : this.pageSize
			});
		} else if(this.customSelectionUrl) {
			var url = (this.customSelectionUrl.lastIndexOf('diy_selections', 0) === -1) ?
			'diy_selections/' + this.customSelectionUrl + '/query.json' : this.customSelectionUrl;
			
			this.store = Ext.create('Ext.data.Store', {
				fields: ['id', 'name', 'description'],
				proxy : {
					type : 'ajax',
					url : url,
					format : 'json',
					reader : {
						type : 'json',
						root: 'items',
						successProperty : 'success',
						totalProperty : 'total'
					}
				}
			});
		} else {
			HF.msg.failure({msg : 'Bug : Store Class or Custom Selection URL not specified!'});
			return;
		}
		
		this.callParent();
		
		var self = this;
		
		if(this.associationField && this.associationField.length > 0) {
			var onceloaded = false;
			
			this.on('expand', function(field) {
				var store = field.getStore();
				if(!onceloaded) {
					onceloaded = true;
				} else {
					field.getStore().reload();
				}
			});
			
			this.store.on('beforeload', function(store, operation, opts) {
				var searchForm = this.up('searchform');
				var params = searchForm.getValues();
				var extraParams = {};
				Ext.Array.each(this.associationField, function(f) {
					var name = null;
					var value = null;
					
					if(Ext.isString(f)) {
						name = f;
						value = f;
					} else if(Ext.isObject(f) && f.hasOwnProperty('name') && f.hasOwnProperty('value')) {
						name = f.name;
						value = f.value;
					} else {
						return;
					}
					
					// 값이 string이면 
					if(Ext.isString(value)) {
						if(self.storeClass) {
							extraParams['_q[' + name + ']'] = params[name];
						} else {
							extraParams[name] = params[name];
						}
					// 값이 함수이면 
					} else if(Ext.isFunction(value)) {
						value = value.call(this);
						if(self.storeClass) {
							extraParams['_q[' + name + ']'] = value;
						} else {
							extraParams[name] = value;
						}
					}
				});

				store.getProxy().extraParams = extraParams;
			}, this);
		}
	}
});

