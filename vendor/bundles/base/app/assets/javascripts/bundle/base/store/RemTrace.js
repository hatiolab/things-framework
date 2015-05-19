Ext.define('Base.store.RemTrace', {
	
	extend : 'Ext.data.Store',
	
	model : 'Base.model.RemTrace',
	
	autoLoad : false,
	
	remoteFilter : true,
	
	remoteSort : true,
	
	buffered : false,
	
	pageSize : 100,
	
	sorters : [ {
		property : 'name',
		direction : 'ASC'
	} ],
	
	proxy : {
		type : 'rest',
		url : 'rem_traces',
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