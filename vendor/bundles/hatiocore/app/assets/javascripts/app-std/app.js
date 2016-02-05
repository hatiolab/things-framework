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
              options.url = this.getBaseUrl() + options.url;
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
