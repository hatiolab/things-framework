Ext.define('Base.view.expansion_code.ExpansionCodeItemList', {

	requires : 'Base.store.ExpansionCodeItem',
	
	extend : 'Ext.grid.Panel',
	
	xtype : 'base_expansion_code_item_list',
	
	mixins : {
		spotlink : 'Frx.mixin.view.SpotLink'
	},
	
	title : T('label.col'),

	store : 'Base.store.ExpansionCodeItem',
	
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
	}, { 
		dataIndex : 'bind_index', 
		header : T('label.no'),
		width : 35,
		align : 'right'
	}, {
		dataIndex : 'name', 
		header : T('label.name'),
		width : 120,
		editor : {
			xtype : 'textfield',
			allowBlank : false
		}
	}, {
		dataIndex : 'description', 
		header : T('label.description'),
		flex : 1,
		editor : {
			xtype : 'textfield',
			allowBlank : false
		}
	}, {
		dataIndex : 'unique_flag', 
		header : T('label.unique'),
		width : 70,
		xtype : 'checkcolumn'
	}, {
		dataIndex : 'col_type', 
		header : T('label.type'),
		width : 90,
		editor : {
			allowBlank : false,
			xtype : 'codecombo', 
			commonCode : 'ENTITY_FIELD_TYPE'
		}
	}, {
		dataIndex : 'col_size', 
		header : T('label.size'),
		width : 60,
		editor : {
			xtype : 'numberfield',
			allowBlank : false
		}
	}, {
		dataIndex : 'ref_type', 
		header : T('label.ref_type'),
		width : 100,
		editor : {
			xtype : 'codecombo', 
			commonCode : 'ENTITY_REF_TYPE'
		}
	}, {
		dataIndex : 'ref_name', 
		header : T('label.ref_name'),
		width : 125,
		editor : {
			xtype : 'textfield',
			allowBlank : false
		}
	}, {
		dataIndex : 'nullable',
		header : T('label.nullable'),
		width : 70,
		xtype : 'checkcolumn'
	} ],
	
	selModel : Ext.create('Ext.selection.CheckboxModel'),
		
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'add', 'save', 'delete']
	} ]

});