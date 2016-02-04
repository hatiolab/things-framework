Ext.define('Base.view.entity.EntityLogicList', {
	
	extend : 'Ext.grid.Panel',
	
	requires : ['Ext.ux.CheckColumn'],
	
	xtype : 'base_entity_logic_list',
	
	title : T('label.entity') + ' ' + T('label.logic'),
	
	store : Ext.create('Ext.data.Store', {
		fields : [
			{ name : 'id', 				type : 'integer' },
			{ name : 'entity_id', 		type : 'integer' },
			{ name : 'name', 			type : 'string'  },
			{ name : 'description', 	type : 'string'  },
			{ name : 'level', 			type : 'string'  },
			{ name : 'logic', 			type : 'string'  },
			{ name : '_cud_flag_', 		type : 'string'  }
		]
	}),
	
	selType : 'cellmodel', 
	
	selModel : Ext.create('Ext.selection.CheckboxModel'),
	
    plugins : [ Ext.create('Ext.grid.plugin.CellEditing', {
        clicksToEdit : 1,
        autoCancel : true
    }) ],
	
	columns : [ {
		xtype : 'actioncolumn', 
		width : 30, 
		align : 'center', 
		itemId : 'goto_item',
		items : [ { 
			icon : '/assets/std/iconDetail.png', 
			tooltip : T('tooltip.goto_item') 
		} ]
	}, {
		header : T('label.id'),
		dataIndex : 'id',
		hidden : true
	}, { 
		dataIndex : 'entity_id',
		hidden : true
	}, {
		dataIndex : 'name',
		header : T('label.name'),
		flex : 1,
		editor : {
			xtype : 'textfield',
			allowBlank : false
		}
	}, { 
		dataIndex : 'description',
		header : T('label.description'),
		flex : 2,
		editor : {
			xtype : 'textfield'
		}
	}, { 
		dataIndex : 'level',
		header : T('label.level'),
		width : 100,
		editor : {
			xtype : 'combo',
			store : Ext.create('Ext.data.Store', {
			    fields : ['name', 'value'],
			    data : [
					{ name : '', value : '' },
					{ name : 'Instance', value : 'instance' },
					{ name : 'Class', value : 'class' }
			    ]
			}),
			queryMode: 'local',
			displayField: 'name',
			valueField: 'value',
			value : ''
		}
	} ],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'add', 'save', 'delete']
	} ],
	
	gridAlias : 'logics',
	
	getNewRecord : function(entity_id) {
		return {
			id : '',
			entity_id : entity_id,
			name : '',
			description : '',
			level : '',
			logic : '',
			_cud_flag_ : ''
		};
	}
});