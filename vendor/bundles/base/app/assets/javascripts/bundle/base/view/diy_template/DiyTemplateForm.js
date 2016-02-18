Ext.define('Base.view.diy_template.DiyTemplateForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_diy_template_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ name : 'name', fieldLabel : T('label.name'), allowBlank : false, maxLength : 64 },
		{ name : 'description', fieldLabel : T('label.description'), maxLength : 255 },
		{ name : 'template', fieldLabel : T('label.template'), xtype : 'textareafield' },
		{ name : 'logic', fieldLabel : T('label.logic'), xtype : 'textareafield' },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ]
});