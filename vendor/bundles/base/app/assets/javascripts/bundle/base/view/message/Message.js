Ext.define('Base.view.message.Message', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_message',
	
	title : T('menu.Message'),
	
	store : 'Base.store.Message',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{
			xtype: 'codecolumn',
			commonCode: 'LOCALE',
			tpl: '{description}',
			header: T('label.locale'),
			width: 80,
			dataIndex: 'locale',
			editor: {
				xtype: 'codecombo',
				commonCode: 'LOCALE'
			}
		},
		{ header : T('label.name'), dataIndex : 'name' , editor : { xtype : 'textfield' , maxLength : 255 }, width : 180 },
		{ header : T('label.display'), dataIndex : 'display' , editor : { xtype : 'textfield' , maxLength : 1000 }, flex: 1 },
		{ header : T('label.updater'), dataIndex : 'updater', xtype : 'entitycolumn' },
		{ header : T('label.updated_at'), dataIndex : 'updated_at', xtype : 'datecolumn', format : T('format.datetime'), width : 135 },
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [
			{ name : 'locale-eq', fieldLabel : T('label.locale'), xtype : 'codesearchcombo', commonCode : 'LOCALE', valueField : 'name', displayField : 'name' },
			{ name : 'name-like', fieldLabel : T('label.name')},
			{ name : 'display-like', fieldLabel : T('label.display')},
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});