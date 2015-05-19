Ext.define('Base.view.code_expansion.CodeExpansionItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 'Base.view.code_expansion.CodeExpansionForm'],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_code_expansion_item',
	
	title : T('menu.CodeExpansion'),
	
	items : [ 
		{ xtype : 'base_code_expansion_form' }
	]
});