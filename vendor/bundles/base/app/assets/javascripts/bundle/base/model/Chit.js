Ext.define('Base.model.Chit', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'entity_id', type : 'integer' },
		{ name : 'entity', type : 'auto' },
		{ name : 'name', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'template', type : 'text' },
		{ name : 'logic', type : 'text' },
		{ name : 'creator_id', type : 'integer' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updater_id', type : 'integer' },
		{ name : 'updater', type : 'auto' },
		{ name : 'created_at', type : 'date' },
		{ name : 'updated_at', type : 'date' },
		{ name : 'properties_attributes', type : 'auto', defaultValue : [] },
		{ name : '_cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'presence', field : 'entity_id' },
		{ type : 'presence', field : 'name' },
		{ type : 'length', field : 'name', max : 64 },
		{ type : 'length', field : 'description', max : 255 }
	],
	
  	proxy : {
		type : 'rest',
		url : 'chits',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'chit'
        }
	}
});