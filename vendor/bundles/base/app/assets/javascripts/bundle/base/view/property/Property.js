Ext.define('Base.view.property.Property', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_property',
		
	title : T('menu.Property'),
	
	selectionMode : 'SINGLE',
	
	store : 'Base.store.Property',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.on_type'), width : 120, dataIndex : 'on_type' },
		{ header : T('label.on_id'), width : 100, dataIndex : 'on_id' },
		{ header : T('label.name'), width : 120, dataIndex : 'name', editor : { xtype : 'textfield', allowBlank : false, minLength : 1, maxLength : 64 } },
		{ header : T('label.value'), flex : 1, dataIndex : 'value', editor : { xtype : 'textfield', allowBlank : false, maxLength : 255 } },
		{ header : T('label.updater'), dataIndex : 'updater', xtype : 'entitycolumn' },
		{ header : T('label.updated_at'), width : 130, dataIndex : 'updated_at', xtype : 'datecolumn', readOnly : true, format : T('format.datetime') }
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'add', 'save', 'delete']
	}, {
		xtype : 'searchform',
		items : [ 
			{ fieldLabel : T('label.name'), name : 'name-like' },
			{ fieldLabel : T('label.description'), name : 'description-like' },
			{ name : 'on_type-eq', 
				fieldLabel : T('label.on_type'), 
				xtype : 'entitysearchcombo', 
				storeClass : 'Base.store.Entity',
				valueField : 'name'
			},
			{ fieldLabel : T('label.value'), name : 'value-like' },
		]
	} ]
	
});