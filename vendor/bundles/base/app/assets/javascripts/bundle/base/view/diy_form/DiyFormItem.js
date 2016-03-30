Ext.define('Base.view.diy_form.DiyFormItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 
		'Base.view.diy_form.DiyFormForm',
		'Base.view.diy_form.DiyFormSearchFieldsEditor',
		'Base.view.diy_form.DiyFormDetailFieldsEditor'
	],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_diy_form_item',
	
	title : T('menu.DiyForm'),
	
	items : [ { 
		xtype : 'base_diy_form_form' 
	}, { 
		xtype : 'base_diy_form_search_fields_editor' 
	},{ 
		xtype : 'base_diy_form_detail_fields_editor' 
	} ]
});