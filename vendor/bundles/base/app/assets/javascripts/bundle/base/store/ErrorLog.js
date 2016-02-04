Ext.define('Base.store.ErrorLog', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.ErrorLog',
	
	model : 'Base.model.ErrorLog',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 30,
	
	sorters : [
		{ property : 'created_at', direction : 'desc' },
	],
	
	proxy : {
		type : 'rest',
		url : 'error_logs',
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