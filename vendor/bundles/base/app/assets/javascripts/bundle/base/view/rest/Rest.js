Ext.define('Base.view.rest.Rest', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_rest',
	
	title : T('menu.Rest'),
	
	store : 'Base.store.Rest',
	
	columns : [
		{ header : T('label.bundle'), dataIndex : 'module' , editor : { xtype : 'textfield' , maxLength : 12 }, width : 75 },
		{ header : T('label.id'), dataIndex : 'id', width : 250, hidden : true },
		{ header : T('label.url'), dataIndex : 'name' , editor : { xtype : 'textfield' , maxLength : 64 }, width : 150 },
		{ header : T('label.description'), dataIndex : 'description' , editor : { xtype : 'textfield' , maxLength : 255 }, flex : 1 },
		{ header : T('label.service_class'), dataIndex : 'bean_class_name' , editor : { xtype : 'textfield' , maxLength : 64 }, width : 250 }
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [
			{
				name : 'module-eq',
				xtype : 'codesearchcombo',
				fieldLabel : T('label.bundle'),
				commonCode : 'BUNDLE',
				valueField : 'name',
				displayField : 'description',
				value : 'core'
			},
			{ name : 'name-like', fieldLabel : T('label.url') },
			{ name : 'bean_class_name-like', fieldLabel : T('label.service_class') },
			{ name : 'description-like', fieldLabel : T('label.description') },
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'export']
	} ]
});