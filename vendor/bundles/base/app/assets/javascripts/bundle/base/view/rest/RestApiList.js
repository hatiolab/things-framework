Ext.define('Base.view.rest.RestApiList', {

	extend : 'Frx.common.ListView',
	
	xtype : 'base_rest_api_list',
	
	mixins : {
		spotlink : 'Frx.mixin.view.SpotLink'
	},
	
	title : T('label.list'),

	store : Ext.create('Ext.data.Store', {
		fields:['id', 'service_id', 'name', 'url', 'http_method', 'description'],
	}),	
		
	columns : [ { 
		header : T('label.id'),
		dataIndex : 'id',
		hidden : true
	}, { 
		dataIndex : 'service_id', 
		hidden : true
	}, { 
		dataIndex : 'name', 
		header : T('label.name'),
		width : 110
	}, { 
		dataIndex : 'url', 
		header : T('label.url'),
		width : 225
	}, { 
		dataIndex : 'http_method', 
		header : 'Method',
		width : 80
	}, { 
		dataIndex : 'description', 
		header : T('label.description'),
		flex : 1
	} ],
			
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list']
	} ]

});