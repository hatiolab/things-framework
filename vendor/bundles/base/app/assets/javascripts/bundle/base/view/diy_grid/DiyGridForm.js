Ext.define('Base.view.diy_grid.DiyGridForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_diy_grid_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ name : 'name', fieldLabel : T('label.name'), allowBlank : false, maxLength : 64 },
		{ name : 'description', fieldLabel : T('label.description'), maxLength : 255 },
		{ name : 'category', fieldLabel : T('label.category'), maxLength : 20 },
		{ name : 'config', fieldLabel : T('label.config'), xtype : 'textareafield', rows : 8 },
		{ name : 'fields', fieldLabel : T('label.fields'), xtype : 'textareafield', maxLength : 4000, rows : 8 },
		{ name : 'columns', fieldLabel : T('label.columns'), xtype : 'textareafield', maxLength : 4000, rows : 8 },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ]
});