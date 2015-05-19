Ext.define('Base.view.expansion_code.ExpansionCodeDataList', {

	requires : 'Base.store.CodeExpansion',
	
	extend : 'Ext.grid.Panel',
	
	xtype : 'base_expansion_code_data_list',
	
	mixins : {
		spotlink : 'Frx.mixin.view.SpotLink'
	},
	
	title : T('label.data'),

	store : 'Base.store.CodeExpansion',
	
	autoScroll : true,
	
	plugins : [ Ext.create('Ext.grid.plugin.CellEditing', {
		clicksToEdit : 1,
		autoCancel : true
	}) ],
	
	columns : [ { 
		header : T('label.id'),
		dataIndex : 'id',
		hidden : true
	}, { 
		dataIndex : 'expansion_code_id', 
		hidden : true
	}/*, {
		dataIndex : 'data_1', 
		header : T('label.data') + " 1",
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	}, {
		dataIndex : 'data_2', 
		header : T('label.data') + " 2",
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	}, {
		dataIndex : 'data_3', 
		header : T('label.data') + " 3",
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	}, {
		dataIndex : 'data_4', 
		header : T('label.data') + " 4",
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	}, {
		dataIndex : 'data_5', 
		header : T('label.data') + " 5",
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	}, {
		dataIndex : 'data_6', 
		header : T('label.data') + " 6",
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	}, {
		dataIndex : 'data_7', 
		header : T('label.data') + " 7",
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	}, {
		dataIndex : 'data_8', 
		header : T('label.data') + " 8",
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	}, {
		dataIndex : 'data_9', 
		header : T('label.data') + " 9",
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	}, {
		dataIndex : 'data_10', 
		header : T('label.data') + " 10",
		flex : 1,
		editor : {
			xtype : 'textfield'
		}
	}*/ ],
	
	selModel : Ext.create('Ext.selection.CheckboxModel'),
		
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'add', 'save', 'delete']
	} ]

});