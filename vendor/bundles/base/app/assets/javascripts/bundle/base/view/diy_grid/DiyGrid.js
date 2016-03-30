Ext.define('Base.view.diy_grid.DiyGrid', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_diy_grid',
	
	title : T('menu.DiyGrid'),
	
	store : 'Base.store.DiyGrid',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.name'), dataIndex : 'name' , editor : { xtype : 'textfield' , maxLength : 64 }, width : 150 },
		{ header : T('label.category'), dataIndex : 'category' , editor : { xtype : 'textfield' , maxLength : 20 } },
		{ header : T('label.description'), dataIndex : 'description' , editor : { xtype : 'textfield' , maxLength : 255 }, flex : 1 },
		{ header : T('label.updater'), dataIndex : 'updater', xtype : 'entitycolumn' },
		{ header : T('label.updated_at'), dataIndex : 'updated_at', xtype : 'datecolumn', format : T('format.datetime'), width : 120 },
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [
			{ name : 'name-like', fieldLabel : T('label.name')},
			{ name : 'description-like', fieldLabel : T('label.description')},
			{ name : 'category-like', fieldLabel : T('label.category')},
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});