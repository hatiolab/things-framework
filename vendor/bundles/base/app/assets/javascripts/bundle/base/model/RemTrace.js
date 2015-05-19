Ext.define('Base.model.RemTrace', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'domain_id', type : 'integer' },
		{ name : 'name', type : 'string' },
		{ name : 'entity_id', type : 'integer' },
		{ name : 'entity_type', type : 'string' },
		{ name : 'content', type : 'string' },
		// { name : 'content', type : 'text' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updater', type : 'auto' },
		{ name : 'created_at', type : 'date' },
		{ name : 'updated_at', type : 'date' },
		{ name : '_cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'presence', field : 'entity_type' },
		{ type : 'presence', field : 'entity_id' }
	],
	
  	proxy : {
		type : 'rest',
		url : 'rem_traces',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'rem_trace'
        }
	}
});