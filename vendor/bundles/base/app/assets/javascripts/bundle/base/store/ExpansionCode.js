Ext.define('Base.store.ExpansionCode', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.ExpansionCode',
	
	model : 'Base.model.ExpansionCode',
	
	autoLoad : false,

	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 30,
	
	sorters : [
		{ property : 'name', direction : 'asc' },
	],
	
	proxy : {
		type : 'rest',
		url : 'expansion_codes',
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