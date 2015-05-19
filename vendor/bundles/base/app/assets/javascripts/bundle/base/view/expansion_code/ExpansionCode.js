Ext.define('Base.view.expansion_code.ExpansionCode', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_expansion_code',
	
	title : T('menu.ExpansionCode'),
	
	store : 'Base.store.ExpansionCode',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.name'), dataIndex : 'name', width : 165 , editor : { xtype : 'textfield' , maxLength : 64 } },
		{ header : T('label.description'), dataIndex : 'description', flex : 1 , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header: T('label.updater'), dataIndex: 'updater', xtype: 'entitycolumn' }, 
		{ header: T('label.updated_at'), width: 130, dataIndex: 'updated_at', xtype: 'datecolumn', format: T('format.datetime') }
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [
			{ name : 'name-like', fieldLabel : T('label.name')},
			{ name : 'description-like', fieldLabel : T('label.description') }
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});