Ext.define('Base.view.storage_info.StorageInfo', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_storage_info',
	
	title : T('menu.StorageInfo'),
	
	store : 'Base.store.StorageInfo',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.name'), dataIndex : 'name' , editor : { xtype : 'textfield' , maxLength : 62 } },
		{ header : T('label.description'), dataIndex : 'description' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.path'), dataIndex : 'path' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ 
			header : T('label.updater'), 
			dataIndex : 'updater', 
			xtype : 'entitycolumn' 
		},
		{ 
			header : T('label.updated_at'), 
			width : 130, 
			dataIndex : 'updated_at', 
			xtype : 'datecolumn', 
			format : T('format.datetime') 
		}		
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [
			{ name : 'name-like', fieldLabel : T('label.name')},
			{ name : 'description-like', fieldLabel : T('label.description')},
			{ name : 'path-like', fieldLabel : T('label.path')}
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});