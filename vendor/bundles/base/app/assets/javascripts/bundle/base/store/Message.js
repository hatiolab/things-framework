Ext.define('Base.store.Message', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.Message',
	
	model : 'Base.model.Message',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 30,
	

	
	proxy : {
		type : 'rest',
		url : 'messages',
		format : 'json',
	    reader : {
			type : 'json',
			root : 'items',
			successProperty : 'success',
			totalProperty : 'total'
        },
        writer : {
			type : 'json'
        }
	}
	
});