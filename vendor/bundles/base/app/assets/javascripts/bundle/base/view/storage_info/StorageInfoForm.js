Ext.define('Base.view.storage_info.StorageInfoForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_storage_info_form',
	
	title : T('title.basic_info'),
		
	autoScroll : true,
	
	defaults : { xtype : 'textfield', anchor : '100%' },
	
	items : [
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ name : 'name', fieldLabel : T('label.name'), allowBlank : false, maxLength : 62 },
		{ name : 'description', fieldLabel : T('label.description'), allowBlank : false, maxLength : 255 },	
		{
			name : 'rule', 
			fieldLabel : T('label.rule'), 
			flex : 1,
			xtype : 'codecombo',
			commonCode : 'UPLOAD_FOLDER_RULE',
			displayField: 'description'
		},
		{ name : 'path', fieldLabel : T('label.path'), allowBlank : false, maxLength : 255 },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ]
});