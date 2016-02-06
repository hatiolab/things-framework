Ext.define('Base.store.RestApi', {
	
	extend : 'Ext.data.Store',
	
	model : 'Base.model.RestApi',
	
	autoLoad : false,
	
	remoteFilter : false,
	
	remoteSort : false,
	
	proxy: {
		type: 'rest',
		url : 'rests/api',
		format : 'json',
	    reader: {
			type: 'json',
			root: 'api_list',
			successProperty : 'success',
			totalProperty : 'total'
        },
        writer: {
			type: 'json'
        }
	}
	
});