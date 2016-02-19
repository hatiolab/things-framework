Ext.define('Base.view.alarm.AlarmForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_alarm_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ name : 'name', fieldLabel : T('label.name'), allowBlank : false, maxLength : 64 },
		{ name : 'category', fieldLabel : T('label.category'), xtype : 'codefield', commonCode : 'ALARM_CATEGORY' },
		{ name : 'description', fieldLabel : T('label.description'), maxLength : 255 },
		{ name : 'title', fieldLabel : T('label.title'), maxLength : 255 },
		{ name : 'alarm_type', fieldLabel : T('label.type'), xtype : 'codefield', commonCode : 'ALARM_TYPE' },
		{ name : 'receivers', fieldLabel : T('label.receivers'), maxLength : 1000 },
		{ name : 'lang_type', fieldLabel : T('label.lang_type'), xtype : 'codefield', commonCode : 'SCRIPT_ENGINE' },
		//{ name : 'template', fieldLabel : T('label.template'), xtype : 'textareafield' },
		//{ name : 'logic', fieldLabel : T('label.logic'), xtype : 'textareafield' },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ]
});