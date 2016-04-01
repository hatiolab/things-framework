Ext.define('Base.view.diy_service.DiyService', {
	
	extend: 'Frx.common.ListView',
	
	xtype : 'base_diy_service',
	
	title : T('menu.DiyService'),
		
	store : 'Base.store.DiyService',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.name'), dataIndex : 'name', width : 150, editor : { xtype : 'textfield', allowBlank : false } },
		{ header : T('label.description'), dataIndex : 'description', flex : 1, editor : { xtype : 'textfield' } },
		{ header : T('label.lang_type'), dataIndex : 'lang_type', editor : { xtype : 'codecombo', commonCode : 'SCRIPT_ENGINE', allowBlank : false }, width : 85 },
		{ header : T('label.script_type'), dataIndex : 'script_type', editor : { xtype : 'codecombo', commonCode : 'SCRIPT_TYPE', allowBlank : false }, width : 85 },
		{ header : T('menu.DiyForm'), dataIndex : 'diy_form', width : 100, xtype : 'entitycolumn', editor : { xtype: 'entitycolumneditor', storeClass: 'Base.store.DiyForm' } },
		{ header : T('menu.DiyGrid'), dataIndex : 'diy_grid', width : 100, xtype : 'entitycolumn', editor : { xtype: 'entitycolumneditor', storeClass: 'Base.store.DiyGrid' } },
		{ header : T('label.active_flag'), dataIndex : 'active_flag', xtype : 'checkcolumn', width : 60 },
		{ header : T('label.atomic_flag'), dataIndex : 'atomic_flag', xtype : 'checkcolumn', width : 60 },
		{ header : T('label.updater'), dataIndex : 'updater', xtype : 'entitycolumn' },
		{ header : T('label.updated_at'), width : 130, dataIndex : 'updated_at', xtype : 'datecolumn', format : T('format.datetime') }
	],
	
	dockedItems: [ {
		xtype : 'searchform',
		items : [
			{ fieldLabel : T('label.name'), name : 'name-like' },
			{ fieldLabel : T('label.description'), name : 'description-like' },
			{ 
				fieldLabel : T('label.lang_type'), 
				name : 'lang_type-eq', 
				xtype : 'codesearchcombo', 
				commonCode : 'SCRIPT_ENGINE',
				valueField : 'name',
				displayField : 'name'
			},			
			{ 
				fieldLabel : T('label.script_type'), 
				name : 'script_type-eq', 
				xtype : 'codesearchcombo', 
				commonCode : 'SCRIPT_TYPE',
				valueField : 'name',
				displayField : 'name'
			},
			{ 
				fieldLabel : T('label.active_flag'), 
				name : 'active_flag-eq', 
				inputValue : true, 
				xtype : 'checkboxfield' 
			},
			{ 
				fieldLabel : T('label.atomic_flag'), 
				name : 'atomic_flag-eq', 
				inputValue : true, 
				xtype : 'checkboxfield' 
			}
		]
	}, {
		xtype: 'controlbar',
		items: ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
	
});