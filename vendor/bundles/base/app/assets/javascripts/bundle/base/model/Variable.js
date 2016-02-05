Ext.define('Base.model.Variable', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'name', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'category', type : 'string' },
		{ name : 'logic', type : 'text' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updater', type : 'auto' },
		{ name : 'created_at', type : 'date' },
		{ name : 'updated_at', type : 'date' },
		{ name : 'cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'presence',  field : 'name' },
		{ type : 'length',    field : 'name', min : 2, max : 60 },
		{ type : 'length',    field : 'description', max : 255 }
	],
	
  	proxy : {
		type : 'rest',
		url : 'variables',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'variable'
        }
	}
});