Ext.define('Base.store.DynamicData', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.DynamicData',
	
	model : 'Base.model.DynamicData',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 100,
	
  	proxy : {
		type : 'rest',
		url : 'diy_selections/query?dynamic=Y',
		format : 'json',
	    reader : {
			type : 'json',
			root : 'items',
			successProperty : 'success',
			totalProperty : 'total'
        },
        writer : {
			type : 'json',
			root : 'items'
        }
	}
});