Ext.define('Base.view.diy_form.DiyFormForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_diy_form_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ name : 'name', fieldLabel : T('label.name'), allowBlank : false, maxLength : 64 },
		{ name : 'description', fieldLabel : T('label.description'), maxLength : 255 },
		{ name : 'category', fieldLabel : T('label.category'), maxLength : 20 },
		{ name : 'title', fieldLabel : T('label.title'), allowBlank : false, maxLength : 64 },
		{ name : 'url', fieldLabel : T('label.url'), allowBlank : false, maxLength : 128 },
		{ name : 'layout', fieldLabel : T('label.layout'), maxLength : 30 },
		{ name : 'selects', fieldLabel : 'Select Fields', maxLength : 255 },
		{ name : 'removes', fieldLabel : 'Remove Fields', maxLength : 255 },
		{ name : 'searchs', fieldLabel : 'Search Fields', xtype : 'textareafield', rows : 8, maxLength : 4000 },
		{ name : 'sorts', fieldLabel : 'Sort Fields', xtype : 'textareafield', maxLength : 128 },
		{ name : 'details', fieldLabel : 'Detail Fields', xtype : 'textareafield', rows : 8 },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ]
});