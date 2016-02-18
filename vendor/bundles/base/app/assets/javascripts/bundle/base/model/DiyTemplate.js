Ext.define('Base.model.DiyTemplate', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'name', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'template', type : 'text' },
		{ name : 'logic', type : 'text' },
		{ name : 'creator_id', type : 'string' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updater_id', type : 'string' },
		{ name : 'updater', type : 'auto' },
		{ name : 'created_at', type : 'string' },
		{ name : 'updated_at', type : 'string' },
		{ name : 'cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'presence', field : 'name' },
		{ type : 'length', field : 'name', max : 64 },
		{ type : 'length', field : 'description', max : 255 },
	],
	
  	proxy : {
		type : 'rest',
		url : 'diy_templates',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'diy_template'
        }
	}
});