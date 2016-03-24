Ext.define('Base.view.storage_info.StorageInfo', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_storage_info',
	
	title : T('menu.StorageInfo'),
	
	store : 'Base.store.StorageInfo',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.name'), dataIndex : 'name' , editor : { xtype : 'textfield' , maxLength : 62 } },
		{ header : T('label.description'), dataIndex : 'description' , editor : { xtype : 'textfield' , maxLength : 255 }, width : 175 },
		{ 
			header : T('label.category'), 
			dataIndex : 'category', 
			width : 85,
			editor : { 
				xtype : 'codecombo', 
				commonCode : 'STORAGE_CATEGORY'
			}
		},
		{ header : T('label.tag'), dataIndex : 'path' , editor : { xtype : 'textfield' , maxLength : 64 }, flex : 1 },
		{ header : T('label.path'), dataIndex : 'path' , editor : { xtype : 'textfield' , maxLength : 255 }, flex : 1 },
		{ 
			header : T('label.rule'), 
			dataIndex : 'rule', 
			width : 85,
			editor : { 
				xtype : 'codecombo', 
				commonCode : 'UPLOAD_FOLDER_RULE'
			}
		},
		{ 
			header : T('label.default'), 
			dataIndex : 'default_flag', 
			xtype : 'checkcolumn', 
			width : 60 
		},
		{ 
			header : T('label.resource'), 
			dataIndex : 'resource_flag', 
			xtype : 'checkcolumn', 
			width : 60 
		},		
		{ 
			header : T('label.updater'), 
			dataIndex : 'updater', 
			xtype : 'entitycolumn' 
		},
		{ 
			header : T('label.updated_at'), 
			width : 135, 
			dataIndex : 'updated_at', 
			xtype : 'datecolumn', 
			format : T('format.datetime') 
		}		
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [
			{ name : 'name-like', fieldLabel : T('label.name') },
			{ name : 'description-like', fieldLabel : T('label.description') },
			{ name : 'path-like', fieldLabel : T('label.path') },
			{ 
				fieldLabel : T('label.rule'), 
				name : 'rule-eq', 
				xtype : 'codesearchcombo', 
				commonCode : 'UPLOAD_FOLDER_RULE',
				valueField : 'name',
				displayField : 'name'				
			}
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});