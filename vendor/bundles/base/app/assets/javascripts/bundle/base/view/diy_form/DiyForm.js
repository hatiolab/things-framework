Ext.define('Base.view.diy_form.DiyForm', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_diy_form',
	
	title : T('menu.DiyForm'),
	
	store : 'Base.store.DiyForm',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.name'), dataIndex : 'name' , editor : { xtype : 'textfield' , maxLength : 64 }, width : 150 },
		{ header : T('label.description'), dataIndex : 'description' , editor : { xtype : 'textfield' , maxLength : 255 }, width : 200 },
		{ header : T('label.category'), dataIndex : 'category' , editor : { xtype : 'textfield' , maxLength : 20 } },
		{ header : T('label.title'), dataIndex : 'title' , editor : { xtype : 'textfield' , maxLength : 64 }, width : 150 },
		{ header : T('label.url'), dataIndex : 'url' , editor : { xtype : 'textfield' , maxLength : 128 } },
		{ header : T('label.layout'), dataIndex : 'layout' , editor : { xtype : 'textfield' , maxLength : 30 } },
		{ header : 'Select Fields', dataIndex : 'selects' , editor : { xtype : 'textfield' , maxLength : 255 }, width : 180 },
		{ header : 'Remove Fields', dataIndex : 'removes' , editor : { xtype : 'textfield' , maxLength : 255 }, width : 150 }
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [
			{ name : 'name-like', fieldLabel : T('label.name')},
			{ name : 'description-like', fieldLabel : T('label.description')},
			{ name : 'category-like', fieldLabel : T('label.category')},
			{ name : 'title-like', fieldLabel : T('label.title')},
			{ name : 'url-like', fieldLabel : T('label.url')},
			{ name : 'layout-like', fieldLabel : T('label.layout')},
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});