Ext.define('Base.model.StorageInfo', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'name', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'category', type : 'string' },
		{ name : 'tag', type : 'string' },
		{ name : 'rule', type : 'string' },
		{ name : 'path', type : 'string' },
		{ name : 'default_flag', type : 'boolean' },
		{ name : 'resource_flag', type : 'boolean' },
		{ name : 'created_at', type : 'date' },
		{ name : 'creator_id', type : 'integer' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updated_at', type : 'date' },
		{ name : 'updater_id', type : 'integer' },
		{ name : 'updater', type : 'auto' },		
		{ name : 'cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'length', field : 'description', max : 255 },
		{ type : 'presence', field : 'name' },
		{ type : 'length', field : 'name', max : 62 },
		{ type : 'presence', field : 'path' },
		{ type : 'length', field : 'path', max : 255 },
	],
	
  	proxy : {
		type : 'rest',
		url : 'storage_infos',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'storage_info'
        }
	}
});