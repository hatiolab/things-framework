Ext.define('Base.view.chit.ChitItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 'Base.view.chit.ChitForm', 'Base.view.chit.ChitLogic' ],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_chit_item',
	
	title : T('menu.Chit'),
	
	items : [ 
		{ xtype : 'base_chit_form' },
		{ xtype : 'base_chit_logic' },
		{ xtype : 'base_attachment_form' },
		{ xtype : 'base_property_form' }
	]
});