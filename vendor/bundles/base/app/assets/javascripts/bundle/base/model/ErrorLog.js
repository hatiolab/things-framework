Ext.define('Base.model.ErrorLog', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'issue_date', type : 'date' },
		{ name : 'status', type : 'string' },
		{ name : 'error_type', type : 'string' },
		{ name : 'message', type : 'string' },
		{ name : 'uri', type : 'string' },
		{ name : 'params', type : 'text' },
		{ name : 'stack_trace', type : 'text' },
		{ name : 'creator_id', type : 'integer' },
		{ name : 'creator', type : 'auto' },
		{ name : 'created_at', type : 'date' },
		{ name : '_cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'presence', field : 'issue_date' },
		{ type : 'length', field : 'status', max : 16 },
		{ type : 'length', field : 'error_type', max : 128 },
		{ type : 'length', field : 'message', max : 1000 },
		{ type : 'length', field : 'uri', max : 1000 }
	],
	
  	proxy : {
		type : 'rest',
		url : 'error_logs',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'error_log'
        }
	}
});