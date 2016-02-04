Ext.define('Base.view.entity.EntityPropList', {
	
	extend : 'Ext.grid.Panel',
	
	requires : ['Ext.ux.CheckColumn'],
	
	xtype : 'base_entity_prop_list',
	
	title : T('label.entity') + ' ' + T('label.property'),
	
	store : Ext.create('Ext.data.Store', {
		fields : [
			{ name : 'id', 				type : 'integer' },
			{ name : 'entity_id', 		type : 'integer' },
			{ name : 'name', 			type : 'string'  },
			{ name : 'description', 	type : 'string'  },
			{ name : 'attribute_type', 	type : 'string'  },
			{ name : 'ref_type', 		type : 'string'  },
			{ name : 'ref_name', 		type : 'string'  },
			{ name : 'editable', 		type : 'false'   },
			{ name : 'disp_rank', 	type : 'integer' },
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
		dataIndex : 'disp_rank',
		header : T('label.rank'),
		width : 55,
		align : 'right',
		editor : {
			xtype: 'numberfield',
			minValue : 0
		}
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
		dataIndex : 'attribute_type',
		header : T('label.type'),
		width : 100,
		editor : {
			allowBlank : false,
			xtype : 'codecombo', 
			commonCode : 'ENTITY_FIELD_TYPE'
		}
	}, { 
		dataIndex : 'ref_type',
		hidden : true
	}, { 
		dataIndex : 'ref_name',
		hidden : true
	}, { 
		dataIndex : 'editable',
		header : T('label.editable'),
		width : 90,
		xtype : 'checkcolumn'
	} ],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'add', 'save', 'delete']
	} ],
	
	gridAlias : 'props',
	
	getNewRecord : function(entity_id) {
		return {
			id : '',
			entity_id : entity_id,
			name : '',
			description : '',
			editable : false,
			attribute_type : '',
			ref_type : '',
			ref_name : '',
			disp_rank : (this.store.getCount() + 1) * 10,
			_cud_flag_ : ''
		};
	}
});