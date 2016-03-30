Ext.define('Base.model.DiyForm', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'category', type : 'string' },
		{ name : 'title', type : 'string' },
		{ name : 'url', type : 'string' },
		{ name : 'layout', type : 'string' },
		{ name : 'selects', type : 'string' },
		{ name : 'removes', type : 'string' },
		{ name : 'searchs', type : 'string' },
		{ name : 'sorts', type : 'string' },
		{ name : 'details', type : 'text' },
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
		{ type : 'length', field : 'category', max : 20 },
		{ type : 'presence', field : 'title' },
		{ type : 'length', field : 'title', max : 64 },
		{ type : 'presence', field : 'url' },
		{ type : 'length', field : 'url', max : 128 },
		{ type : 'length', field : 'layout', max : 30 },
		{ type : 'length', field : 'selects', max : 255 },
		{ type : 'length', field : 'removes', max : 255 },
		{ type : 'length', field : 'searchs', max : 4000 },
		{ type : 'length', field : 'sorts', max : 128 },
	],
	
  	proxy : {
		type : 'rest',
		url : 'diy_forms',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'diy_form'
        }
	}
});