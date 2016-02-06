Ext.define('Base.model.RestApi', {
    
	extend : 'Ext.data.Model',
    
	fields : [
		/*{ name : 'id', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'service_id', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'http_method', type : 'string' },
		{ name : 'url', type : 'string' },
		{ name : 'ws_url', type : 'string' }*/
		{ name : 'id', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'module', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'bean_class_name', type : 'string' },
		{ name : 'api_list', type : 'auto' }		
	], 
	
  	proxy : {
		type : 'ajax',
		url : 'rests/api',
		format : 'json',
	    reader : {
			type : 'json'
        },
        writer : {
			type : 'json',
			root : 'api'
        }
	}
});