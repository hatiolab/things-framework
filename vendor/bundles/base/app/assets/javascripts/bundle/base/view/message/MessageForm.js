Ext.define('Base.view.message.MessageForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_message_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ name : 'name', fieldLabel : T('label.name'), allowBlank : false, maxLength : 255 },
		{ name : 'locale', fieldLabel : T('label.locale'), xtype : 'codefield', commonCode : 'LOCALE' },
		{ name : 'display', fieldLabel : T('label.display'), allowBlank : false, maxLength : 1000 },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ]
});