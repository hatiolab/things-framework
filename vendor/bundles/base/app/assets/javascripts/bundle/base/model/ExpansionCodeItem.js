Ext.define('Base.model.ExpansionCodeItem', {
    
	extend: 'Ext.data.Model',
    
	fields : [ 
		{ name : 'id', 						type : 'string' },
		{ name : 'expansion_code_id', 		type : 'string' },
		{ name : 'name', 					type : 'string' },
		{ name : 'description', 			type : 'string' },
		{ name : 'bind_index', 				type : 'integer'},
		{ name : 'col_type', 				type : 'string' },
		{ name : 'col_size', 				type : 'integer'},
		{ name : 'nullable', 				type : 'boolean'},
		{ name : 'unique_flag', 			type : 'boolean'},
		{ name : 'ref_type', 				type : 'string' },
		{ name : 'ref_name', 				type : 'string' },
		{ name : '_cud_flag_', 				type : 'string' } 
	],
	
	validations : [
		{ type : 'presence',  field : 'expansion_code_id' },
		{ type : 'presence',  field : 'name' },
		{ type : 'length',    field : 'name', max : 64 },
		{ type : 'length',    field : 'description', max : 255 },
		{ type : 'presence',  field : 'bind_index' },
		{ type : 'presence',  field : 'col_type' }
	]
});