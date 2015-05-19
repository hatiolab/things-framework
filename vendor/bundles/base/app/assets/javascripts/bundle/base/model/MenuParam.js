Ext.define('Base.model.MenuParam', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		{ name : 'id', type : 'string' },
		{ name : 'menu_id', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'value', type : 'string' },
		{ name : '_cud_flag_', type : 'string' }
	],
	
	validations : [
		{ type : 'presence',  field : 'menu_id' },
		{ type : 'presence',  field : 'name' },
		{ type : 'length',    field : 'name', min : 1, max : 32 },
		{ type : 'length',    field : 'description', max : 255 },
		{ type : 'length',    field : 'value', max : 4000 },
		{ type : 'presence',  field : 'value' }
	],
	
  	proxy : {
		type : 'rest',
		url : 'menus/menu_params',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'menu'
        }
	}
});