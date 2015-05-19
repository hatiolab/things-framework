Ext.define('Base.view.chit.Chit', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_chit',
	
	title : T('menu.Chit'),
	
	store : 'Base.store.Chit',
	
	columns : [
		{ xtype : 'actioncolumn', icon : 'assets/std/iconSlideshow.png', itemId : 'slideshow', width : 30, align : 'center' },
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.entity'), dataIndex : 'entity', xtype : 'entitycolumn', width : 120, editor : { xtype : 'entitycolumneditor', storeClass : 'Base.store.Entity' } },
		{ header : T('label.name'), dataIndex : 'name', width : 150, editor : { xtype : 'textfield' , maxLength : 64 } },
		{ header : T('label.description'), dataIndex : 'description', flex : 1 , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.updater'), dataIndex : 'updater', xtype : 'entitycolumn' },
		{ header : T('label.updated_at'), dataIndex : 'updated_at', xtype : 'datecolumn', format : T('format.datetime'), width : 130 }
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [
			{ fieldLabel : T('label.entity'), name : 'entity.name-eq', xtype : 'entitysearchcombo', storeClass : 'Base.store.Entity', valueField : 'name' },
			{ fieldLabel : T('label.name'), name : 'name-like' },
			{ fieldLabel : T('label.description'), name : 'description-like' }
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});