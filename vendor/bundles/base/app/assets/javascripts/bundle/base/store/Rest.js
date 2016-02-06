Ext.define('Base.store.Rest', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.Rest',
	
	model : 'Base.model.Rest',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 30,
	

	
	proxy : {
		type : 'rest',
		url : 'rests',
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