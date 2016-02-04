Ext.define('Base.store.ExpansionCodeItem', {
	
	extend : 'Ext.data.Store',
	
	requires : 'Base.model.ExpansionCodeItem',
	
	model : 'Base.model.ExpansionCodeItem',
	
	autoLoad : false,
	
	remoteFilter : false,
	
	remoteSort : false,
	
	pageSize : 1000,
	
	sorters : [ {
		property : 'bind_index',
		direction : 'ASC'
	} ],	
	
	proxy : {
		type : 'rest',
		url : 'expansion_codes/expansion_code_items',
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