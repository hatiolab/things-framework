Ext.define('Base.view.rest.RestForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_rest_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ name : 'name', fieldLabel : T('label.url'), allowBlank : false, maxLength : 64 },
		{ name : 'module', fieldLabel : T('label.bundle'), allowBlank : false, maxLength : 12 },
		{ name : 'description', fieldLabel : T('label.description'), maxLength : 255 },
		{ name : 'bean_class_name', fieldLabel : T('label.service_class'), allowBlank : false, maxLength : 64 }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list']
	} ]
});