Ext.define('Base.view.label.LabelItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 'Base.view.label.LabelForm'],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_label_item',
	
	title : T('menu.Label'),
	
	items : [ 
		{ xtype : 'base_label_form' }
	]
});