Ext.define('Base.model.EntityColumn', {
    
	extend: 'Ext.data.Model',
    
	fields : [ 
		{ name : 'id', 				type : 'string' },
		{ name : 'entity_id', 		type : 'string' },
		{ name : 'name', 			type : 'string' },
		{ name : 'description', 	type : 'string' },
		{ name : 'term', 			type : 'string' },
		{ name : 'col_type', 		type : 'string' },
		{ name : 'col_size', 		type : 'integer'},
		{ name : 'nullable', 		type : 'boolean'},
		{ name : 'def_val', 		type : 'string' },
		{ name : 'uniq_rank', 		type : 'integer'},
		{ name : 'ref_type', 		type : 'string' },
		{ name : 'ref_name', 		type : 'string' },
		{ name : 'list_rank', 		type : 'integer'},
		{ name : 'disp_rank', 		type : 'integer'},
		{ name : '_cud_flag_', 		type : 'string' } 
	],
	
	validations : [
		{ type : 'presence',  field : 'name' },
		{ type : 'length',    field : 'description', max : 255 },
		{ type : 'presence',  field : 'col_type' },
	]
});