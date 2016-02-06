Ext.define('Base.model.Rest', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'module', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'bean_class_name', type : 'string' },
		{ name : 'creator_id', type : 'integer' },
		{ name : 'creator', type : 'auto' },
		{ name : 'created_at', type : 'date' },
		{ name : 'updater_id', type : 'integer' },
		{ name : 'updater', type : 'auto' },
		{ name : 'updated_at', type : 'date' },
		{ name : 'cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'presence', field : 'name' },
		{ type : 'length', field : 'name', max : 64 },
		{ type : 'presence', field : 'module' },
		{ type : 'length', field : 'module', max : 12 },
		{ type : 'length', field : 'description', max : 255 },
		{ type : 'presence', field : 'bean_class_name' },
		{ type : 'length', field : 'bean_class_name', max : 64 },
	],
	
  	proxy : {
		type : 'rest',
		url : 'rests',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'rest'
        }
	}
});