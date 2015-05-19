Ext.define('Base.view.code_expansion.CodeExpansionForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_code_expansion_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ name : 'expansion_code', fieldLabel : T('menu.ExpansionCode'), xtype : 'entityfield', storeClass : 'Base.store.ExpansionCode' },
		{ name : 'data_1', fieldLabel : T('label.data') + " 1", allowBlank : false, maxLength : 255 },
		{ name : 'data_2', fieldLabel : T('label.data') + " 2", maxLength : 255 },
		{ name : 'data_3', fieldLabel : T('label.data') + " 3", maxLength : 255 },
		{ name : 'data_4', fieldLabel : T('label.data') + " 4", maxLength : 255 },
		{ name : 'data_5', fieldLabel : T('label.data') + " 5", maxLength : 255 },
		{ name : 'data_6', fieldLabel : T('label.data') + " 6", maxLength : 255 },
		{ name : 'data_7', fieldLabel : T('label.data') + " 7", maxLength : 255 },
		{ name : 'data_8', fieldLabel : T('label.data') + " 8", maxLength : 255 },
		{ name : 'data_9', fieldLabel : T('label.data') + " 9", maxLength : 255 },
		{ name : 'data_10', fieldLabel : T('label.data') + " 10", maxLength : 255 },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ]
});