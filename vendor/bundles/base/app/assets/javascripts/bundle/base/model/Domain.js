Ext.define('Base.model.Domain', {
    
	extend: 'Ext.data.Model',
    
	fields: [
		{ name : 'id', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'timezone', type : 'string' },
		{ name : 'system_flag', type : 'boolean' },
		{ name : 'lat', type : 'float' },
		{ name : 'lng', type : 'float' },
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
		url : 'domains',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'domain'
        }
	}
});