Ext.define('Base.view.alarm.AlarmItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 
		'Base.view.alarm.AlarmForm',
		'Base.view.alarm.AlarmTemplateEditor',
		'Base.view.alarm.AlarmLogicEditor'
	],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_alarm_item',
	
	title : T('menu.Alarm'),
	
	items : [ 
		{ xtype : 'base_alarm_form' },
		{ xtype : 'base_alarm_template_editor' },
		{ xtype : 'base_alarm_logic_editor' },
		{ xtype : 'base_attachment_form' },
		{ xtype : 'base_property_form', onType : 'Alarm' }
	]
});