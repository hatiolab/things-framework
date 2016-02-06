Ext.define('Base.view.rest.RestItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 'Base.view.rest.RestForm'],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_rest_item',
	
	title : T('menu.Rest'),
	
	items : [ 
		{ xtype : 'base_rest_form' }
	]
});