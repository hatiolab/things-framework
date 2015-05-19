Ext.define('Base.view.menu.MenuItemParam', {
	
	extend : 'Frx.common.ListView',
	
	mixins : {
		spotlink : 'Frx.mixin.view.SpotLink'
	},
	
	xtype : 'base_menu_item_param',
		
	title : T('title.MenuParam'),

	store : 'Base.store.MenuParam',
	
	sortableColumns : false,
	
    plugins : [ Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit : 1
    }) ],
	
	columns : [ 
		{ header : T('label.id'), dataIndex : 'id', width : 45, hidden : true, menuDisabled : true },
		{ header : T('label.menu_id'), dataIndex : 'menu_id', width : 45, hidden : true, menuDisabled : true },
		{ 
			header : T('label.name'), 
			dataIndex : 'name',
			width : 150,
			menuDisabled : true,
			editor : { 
				xtype : 'textfield', 
				allowBlank : false,
				minLength : 2,
				maxLength : 32
			}
		},
		{ 
			header : T('label.description'), 
			dataIndex : 'description', 
			flex : 1,
			menuDisabled : true,
			editor : { 
				xtype : 'textfield', 
				allowBlank : true,
				maxLength : 255
			} 
		},
		{ 
			header : T('label.value'), 
			dataIndex : 'value', 
			flex : 1,
			menuDisabled : true,
			editor : { 
				xtype : 'textfield', 
				allowBlank : false,
				minLength : 2,
				maxLength : 4000
			}
		}
	 ],
	
	selModel : Ext.create('Ext.selection.CheckboxModel'),
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'add', 'save', 'delete']
	} ]

});