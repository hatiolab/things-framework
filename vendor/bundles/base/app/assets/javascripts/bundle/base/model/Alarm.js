Ext.define('Base.model.Alarm', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'name', type : 'string' },
		{ name : 'category', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'title', type : 'string' },
		{ name : 'alarm_type', type : 'string' },
		{ name : 'receivers', type : 'string' },
		{ name : 'lang_type', type : 'string' },
		{ name : 'template', type : 'text' },
		{ name : 'logic', type : 'text' },
		{ name : 'creator_id', type : 'integer' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updater_id', type : 'integer' },
		{ name : 'updater', type : 'auto' },
		{ name : 'created_at', type : 'date' },
		{ name : 'updated_at', type : 'date' },
		{ name : 'properties_attributes', type : 'auto', defaultValue : [] },
		{ name : 'cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'presence', field : 'name' },
		{ type : 'length', field : 'name', max : 64 },
		{ type : 'length', field : 'category', max : 20 },
		{ type : 'length', field : 'description', max : 255 },
		{ type : 'length', field : 'title', max : 255 },
		{ type : 'presence', field : 'alarm_type' },
		{ type : 'length', field : 'alarm_type', max : 20 },
		{ type : 'length', field : 'receivers', max : 1000 },
		{ type : 'length', field : 'lang_type', max : 15 },
	],
	
  	proxy : {
		type : 'rest',
		url : 'alarms',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'alarm'
        }
	}
});