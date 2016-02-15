Ext.define('Base.view.label.LabelForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_label_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ name : 'active_flag', fieldLabel : T('label.active_flag'), xtype : 'checkboxfield', inputValue : true },
		{ name : 'command', fieldLabel : T('label.command'), xtype : 'textareafield' },
		{ name : 'description', fieldLabel : T('label.description'), maxLength : 255 },
		{ name : 'img', fieldLabel : T('label.img'), xtype : 'textareafield' },
		{ name : 'model', fieldLabel : T('label.model'), xtype : 'textareafield' },
		{ name : 'name', fieldLabel : T('label.name'), allowBlank : false, maxLength : 64 },
		{ name : 'owner_id', fieldLabel : T('label.owner_id'), xtype : 'numberfield' },
		{ name : 'status', fieldLabel : T('label.status'), xtype : 'codefield', commonCode : 'LABEL_STATUS' },
		{ name : 'version', fieldLabel : T('label.version'), xtype : 'numberfield' },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ]
});