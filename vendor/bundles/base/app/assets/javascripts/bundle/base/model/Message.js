Ext.define('Base.model.Message', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'name', type : 'string' },
		{ name : 'locale', type : 'string' },
		{ name : 'display', type : 'string' },
		{ name : 'creator_id', type : 'string' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updater_id', type : 'string' },
		{ name : 'updater', type : 'auto' },
		{ name : 'created_at', type : 'date' },
		{ name : 'updated_at', type : 'date' },
		{ name : 'cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'presence', field : 'name' },
		{ type : 'length', field : 'name', max : 255 },
		{ type : 'presence', field : 'locale' },
		{ type : 'length', field : 'locale', max : 15 },
		{ type : 'presence', field : 'display' },
		{ type : 'length', field : 'display', max : 1000 },
	],
	
  	proxy : {
		type : 'rest',
		url : 'messages',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'message'
        }
	}
});