Ext.define('Base.model.Label', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'created_at', type : 'date' },
		{ name : 'creator_id', type : 'integer' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updated_at', type : 'date' },
		{ name : 'updater_id', type : 'integer' },
		{ name : 'updater', type : 'auto' },
		{ name : 'active_flag', type : 'boolean' },
		{ name : 'command', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'img', type : 'string' },
		{ name : 'model', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'owner_id', type : 'integer' },
		{ name : 'status', type : 'string' },
		{ name : 'version', type : 'integer' },
		{ name : 'cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'length', field : 'description', max : 255 },
		{ type : 'presence', field : 'name' },
		{ type : 'length', field : 'name', min : 2, max : 64 },
		{ type : 'presence', field : 'owner_id' },
		{ type : 'presence', field : 'status' },
		{ type : 'length', field : 'status', max : 15 },
	],
	
  	proxy : {
		type : 'rest',
		url : 'labels',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'label'
        }
	}
});
