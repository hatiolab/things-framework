Ext.define('Base.model.CodeExpansion', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'integer' },
		{ name : 'expansion_code_id', type : 'integer' },
		{ name : 'expansion_code', type : 'auto' },
		{ name : 'data_1', type : 'string' },
		{ name : 'data_2', type : 'string' },
		{ name : 'data_3', type : 'string' },
		{ name : 'data_4', type : 'string' },
		{ name : 'data_5', type : 'string' },
		{ name : 'data_6', type : 'string' },
		{ name : 'data_7', type : 'string' },
		{ name : 'data_8', type : 'string' },
		{ name : 'data_9', type : 'string' },
		{ name : 'data_10', type : 'string' },
		{ name : 'creator_id', type : 'integer' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updater_id', type : 'integer' },
		{ name : 'updater', type : 'auto' },
		{ name : 'created_at', type : 'date' },
		{ name : 'updated_at', type : 'date' },
		{ name : '_cud_flag_', type : 'string' }
	],

	validations : [
		{ type : 'presence', field : 'expansion_code_id' },
		{ type : 'presence', field : 'data_1' },
		{ type : 'length', field : 'data_1', max : 255 },
		{ type : 'length', field : 'data_2', max : 255 },
		{ type : 'length', field : 'data_3', max : 255 },
		{ type : 'length', field : 'data_4', max : 255 },
		{ type : 'length', field : 'data_5', max : 255 },
		{ type : 'length', field : 'data_6', max : 255 },
		{ type : 'length', field : 'data_7', max : 255 },
		{ type : 'length', field : 'data_8', max : 255 },
		{ type : 'length', field : 'data_9', max : 255 },
		{ type : 'length', field : 'data_10', max : 255 },
	],
	
  	proxy : {
		type : 'rest',
		url : 'code_expansions',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'code_expansion'
        }
	}
});