Ext.define('Base.model.StorageInfo', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'created_at', type : 'date' },
		{ name : 'creator_id', type : 'integer' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updated_at', type : 'date' },
		{ name : 'updater_id', type : 'integer' },
		{ name : 'updater', type : 'auto' },
		{ name : 'description', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'path', type : 'string' },
		{ name : 'cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'presence', field : 'description' },
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