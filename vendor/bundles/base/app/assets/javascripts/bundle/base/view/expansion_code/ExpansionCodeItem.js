Ext.define('Base.view.expansion_code.ExpansionCodeItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 
		'Base.view.expansion_code.ExpansionCodeForm',
		'Base.view.expansion_code.ExpansionCodeItemList',
		'Base.view.expansion_code.ExpansionCodeDataList'
	],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_expansion_code_item',
	
	title : T('menu.ExpansionCode'),
	
	items : [ 
		{ xtype : 'base_expansion_code_form' },
		{ xtype : 'base_expansion_code_item_list' },
		{ xtype : 'base_expansion_code_data_list' }
	]
});