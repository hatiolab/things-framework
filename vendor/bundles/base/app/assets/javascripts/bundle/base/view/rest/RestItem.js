Ext.define('Base.view.rest.RestItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 
		'Base.view.rest.RestForm', 
		'Base.view.rest.RestApiList'
	],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_rest_item',
	
	title : T('menu.Rest'),
	
	items : [ { 
		xtype : 'base_rest_form' 
	}, { 
		xtype : 'base_rest_api_list' 
	} ]
});