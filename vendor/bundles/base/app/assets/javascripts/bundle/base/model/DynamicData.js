Ext.define('Base.model.DynamicData', {
    
	extend: 'Ext.data.Model',
    
	fields : [
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
		{ name : 'data_11', type : 'string' },
		{ name : 'data_12', type : 'string' },
		{ name : 'data_13', type : 'string' },
		{ name : 'data_14', type : 'string' },
		{ name : 'data_15', type : 'string' },
		{ name : 'data_16', type : 'string' },
		{ name : 'data_17', type : 'string' },
		{ name : 'data_18', type : 'string' },
		{ name : 'data_19', type : 'string' },
		{ name : 'data_20', type : 'string' }
	],
	
	validations : [
		{ type : 'presence',  field : 'name' },
		{ type : 'length',    field : 'name', min : 2, max : 60 },
		{ type : 'length',    field : 'description', max : 255 }
	],
	
  	proxy : {
		type : 'rest',
		url : 'diy_selections/query?dynamic=Y',
		format : 'json',
	    reader : {
			type : 'json',
			root : 'items',
			successProperty : 'success',
			totalProperty : 'total'
        },
        writer : {
			type : 'json',
			root : 'items'
        }
	}
});