Ext.define('Base.store.Chit', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.Chit',
	
	model : 'Base.model.Chit',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 30,
	
	sorters : [
		{ property : 'entity_id', direction : 'asc' },
		{ property : 'name', direction : 'asc' },
	],
	
	proxy : {
		type : 'rest',
		url : 'chits',
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