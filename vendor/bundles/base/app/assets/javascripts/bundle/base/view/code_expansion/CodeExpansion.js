Ext.define('Base.view.code_expansion.CodeExpansion', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_code_expansion',
	
	title : T('menu.CodeExpansion'),
	
	store : 'Base.store.CodeExpansion',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{
			header : T('menu.ExpansionCode'),
			dataIndex : 'expansion_code',
			xtype : 'entitycolumn',
			width : 115,
			editor : {
				xtype : 'entityfield',
				storeClass : 'Base.store.ExpansionCode'
			}
		},
		{ header : T('label.data') + " 1", dataIndex : 'data_1' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.data') + " 2", dataIndex : 'data_2' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.data') + " 3", dataIndex : 'data_3' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.data') + " 4", dataIndex : 'data_4' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.data') + " 5", dataIndex : 'data_5' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.data') + " 6", dataIndex : 'data_6' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.data') + " 7", dataIndex : 'data_7' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.data') + " 8", dataIndex : 'data_8' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.data') + " 9", dataIndex : 'data_9' , editor : { xtype : 'textfield' , maxLength : 255 } },
		{ header : T('label.data') + " 10", dataIndex : 'data_10' , editor : { xtype : 'textfield' , maxLength : 255 } },
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [
			{ name : 'expansion_code.name-eq', fieldLabel : T('menu.ExpansionCode'), xtype : 'entitysearchcombo', storeClass : 'Base.store.ExpansionCode', valueField : 'name' },
		]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});