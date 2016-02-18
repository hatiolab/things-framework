Ext.define('Base.store.DiyTemplate', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.DiyTemplate',
	
	model : 'Base.model.DiyTemplate',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 30,
	
	sorters : [
		{ property : 'name', direction : 'asc' },
	],
	
	proxy : {
		type : 'rest',
		url : 'diy_templates',
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