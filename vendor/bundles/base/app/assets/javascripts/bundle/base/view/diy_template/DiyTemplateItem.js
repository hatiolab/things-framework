Ext.define('Base.view.diy_template.DiyTemplateItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 
	'Base.view.diy_template.DiyTemplateForm',
	'Base.view.diy_template.DiyTemplateEditor'
	],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_diy_template_item',
	
	title : T('menu.DiyTemplate'),
	
	items : [ 
		{ xtype : 'base_diy_template_form' },
		{ xtype : 'base_diy_template_editor' },
		{ xtype : 'base_attachment_form' },
		{ xtype : 'base_property_form', onType : 'DiyTemplate' }
	]
});