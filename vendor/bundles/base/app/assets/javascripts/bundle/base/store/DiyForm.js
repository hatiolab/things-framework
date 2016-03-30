Ext.define('Base.store.DiyForm', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.DiyForm',
	
	model : 'Base.model.DiyForm',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 30,
	
	sorters : [
		{ property : 'name', direction : 'asc' },
	],
	
	proxy : {
		type : 'rest',
		url : 'diy_forms',
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