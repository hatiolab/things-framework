Ext.define('Base.store.CodeExpansion', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.CodeExpansion',
	
	model : 'Base.model.CodeExpansion',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 30,
	
	sorters : [
		{ property : 'data_1', direction : 'asc' },
	],
	
	proxy : {
		type : 'rest',
		url : 'code_expansions',
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