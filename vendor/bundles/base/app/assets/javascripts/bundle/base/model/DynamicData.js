Ext.define('Base.model.DynamicData', {
    
	extend: 'Ext.data.Model',
    
	fields : [
		{ name : 'data', type : 'string' }
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