Ext.define('Base.store.DiyGrid', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.DiyGrid',
	
	model : 'Base.model.DiyGrid',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 30,
	
	sorters : [
		{ property : 'name', direction : 'asc' },
	],
	
	proxy : {
		type : 'rest',
		url : 'diy_grids',
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