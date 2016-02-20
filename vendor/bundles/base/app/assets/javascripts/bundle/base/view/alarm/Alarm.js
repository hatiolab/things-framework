Ext.define('Base.view.alarm.Alarm', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_alarm',
	
	title : T('menu.Alarm'),
	
	store : 'Base.store.Alarm',
	
	columns : [
		{ xtype : 'actioncolumn', icon : 'assets/std/iconSlideshow.png', itemId : 'slideshow', width : 30, align : 'center' },
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.name'), dataIndex : 'name' , editor : { xtype : 'textfield' , maxLength : 64 }, width : 135 },
		{ header : T('label.category'), dataIndex : 'category', editor : { xtype : 'codecombo', commonCode : 'ALARM_CATEGORY' }, width : 90 },
		{ header : T('label.description'), dataIndex : 'description' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.title'), dataIndex : 'title' , editor : { xtype : 'textfield' , maxLength : 255 }, width : 135 },
		{ header : T('label.type'), dataIndex : 'alarm_type', editor : { xtype : 'codecombo', commonCode : 'ALARM_TYPE' } },
		{ header : T('label.receivers'), dataIndex : 'receivers' , editor : { xtype : 'textfield' , maxLength : 1000 }, flex : 1 },
		{ header : T('label.lang_type'), dataIndex : 'lang_type', editor : { xtype : 'codecombo', commonCode : 'SCRIPT_ENGINE' }, width : 90 }
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [
			{ name : 'name-like', fieldLabel : T('label.name')},
			{ name : 'category-eq', fieldLabel : T('label.category'), xtype : 'codesearchcombo', commonCode : 'ALARM_CATEGORY', valueField : 'name', displayField : 'name' },
			{ name : 'description-like', fieldLabel : T('label.description')},
			{ name : 'title-like', fieldLabel : T('label.title')},
			{ name : 'alarm_type-eq', fieldLabel : T('label.type'), xtype : 'codesearchcombo', commonCode : 'ALARM_TYPE', valueField : 'name', displayField : 'name' },
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});