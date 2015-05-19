Ext.define('Base.view.error_log.ErrorLogForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_error_log_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ xtype : 'datefield', name : 'issue_date', fieldLabel : T('label.date'), format : T('format.date') },
		{ name : 'status', fieldLabel : T('label.status'), maxLength : 16 },
		{ name : 'error_type', fieldLabel : T('label.type'), maxLength : 128 },
		{ name : 'message', fieldLabel : T('label.message'), maxLength : 1000 },
		{ name : 'uri', fieldLabel : T('label.url'), maxLength : 1000 },
		{ xtype : 'textareafield', name : 'params', fieldLabel : T('label.parameter') },
		{ xtype : 'textareafield', name : 'stack_trace', fieldLabel : T('label.stack_trace'), rows : 12 },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ]
});