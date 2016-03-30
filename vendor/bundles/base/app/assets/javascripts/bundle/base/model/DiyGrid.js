Ext.define('Base.model.DiyGrid', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'category', type : 'string' },
		{ name : 'config', type : 'text' },
		{ name : 'fields', type : 'string' },
		{ name : 'columns', type : 'string' },
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
		{ type : 'length', field : 'name', max : 64 },
		{ type : 'length', field : 'description', max : 255 },
		{ type : 'length', field : 'category', max : 20 },
		{ type : 'length', field : 'fields', max : 4000 },
		{ type : 'length', field : 'columns', max : 4000 },
	],
	
  	proxy : {
		type : 'rest',
		url : 'diy_grids',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'diy_grid'
        }
	}
});