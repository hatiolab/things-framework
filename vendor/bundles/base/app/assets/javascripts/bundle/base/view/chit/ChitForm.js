Ext.define('Base.view.chit.ChitForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_chit_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ fieldLabel : T('label.entity'), name : 'entity', xtype : 'entityfield', storeClass : 'Base.store.Entity' },
		{ name : 'name', fieldLabel : T('label.name'), allowBlank : false, maxLength : 64 },
		{ name : 'description', fieldLabel : T('label.description'), allowBlank : false, maxLength : 255 },
		{ xtype : 'textareafield', name : 'template', fieldLabel : T('label.template'), rows : 16 },
		//{ xtype : 'textareafield', name : 'logic', fieldLabel : T('label.logic'), rows : 8 },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ]
});