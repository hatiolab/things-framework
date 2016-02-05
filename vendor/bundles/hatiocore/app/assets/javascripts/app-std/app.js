Ext.Loader.setConfig({
    enabled : true,
    paths : {
		'Frx' : 'assets/frx',
		'ux' : 'assets/ux'
    },
	bundleRoot : 'assets/bundle/'
});

//Ext.require(['App.Framework']);

Ext.define('App.util.AppBaseUrl',{
    singleton : true,
    alternateClassName : 'AppBaseUrl',
    requires:['Ext.Ajax'],
 
    config: {
        baseUrl:'http://localhost:9002/rest/'
    },
 
    constructor : function(config) {
		this.initConfig(config);
		Ext.Ajax.on('beforerequest', this.onBeforeAjaxRequest, this);
    },
 
    onBeforeAjaxRequest : function(connection, options) {
		if(options && options.method == 'PUT' && options.action == "update") {
			options = this.filterRestUpdate(options); 
		}

		options.url = this.getBaseUrl() + options.url;
    },

	filterRestUpdate : function(options) {
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

		return options;
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
