Ext.define('Base.model.SubCode', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'parent_id', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'cud_flag_', type : 'string' }
	], 
	
	validations : [
		{ type : 'presence',  field : 'parent_id' },	
		{ type : 'presence',  field : 'name' },
		{ type : 'length',    field : 'name', min : 1, max : 60 },
		{ type : 'length',    field : 'description', max : 255 }
	],		
	
  	proxy : {
		type : 'rest',
		url : 'common_codes',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'common_code'
        }
	}
});