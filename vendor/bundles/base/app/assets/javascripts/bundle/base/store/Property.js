Ext.define('Base.store.Property', {
	
	extend : 'Ext.data.Store',
	
	model : 'Base.model.Property',
	
	autoLoad : false,
	
	remoteFilter : true,
	
	remoteSort : true,
	
	pageSize : 100,
	
	sorters : [ {
		property : 'on_type',
		direction : 'ASC'
	}, {
		property : 'on_id',
		direction : 'ASC'
	}, {
		property : 'name',
		direction : 'ASC'
	} ],
	
	proxy : {
		type : 'rest',
		url : 'properties',
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