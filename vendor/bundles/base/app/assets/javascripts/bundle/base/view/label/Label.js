Ext.define('Base.view.label.Label', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_label',
	
	title : T('menu.Label'),
	
	store : 'Base.store.Label',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.name'), dataIndex : 'name' , editor : { xtype : 'textfield' , maxLength : 64 }, width : 150 },
		{ header : T('label.status'), dataIndex : 'status', 
			editor : { 
				xtype : 'codecombo', 
				commonCode : 'LABEL_STATUS',
				allowBlank : false
			}  },
		{ header : T('label.version'), dataIndex : 'version', align : 'right'  },
		{ header : T('label.description'), dataIndex : 'description' , editor : { xtype : 'textfield' , maxLength : 255 }, flex : 1 },
		{ header : T('label.active_flag'), dataIndex : 'active_flag' , xtype : 'checkcolumn'  },
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
			{ name : 'status-eq', fieldLabel : T('label.status'), xtype : 'codesearchcombo', commonCode : 'LABEL_STATUS', valueField : 'name', displayField : 'name' },
			{ name : 'active_flag-eq', fieldLabel : T('label.active_flag'), xtype : 'checkboxfield', inputValue : true },
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});