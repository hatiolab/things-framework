Ext.define('Base.store.StorageInfo', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.StorageInfo',
	
	model : 'Base.model.StorageInfo',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 30,
	

	
	proxy : {
		type : 'rest',
		url : 'storage_infos',
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