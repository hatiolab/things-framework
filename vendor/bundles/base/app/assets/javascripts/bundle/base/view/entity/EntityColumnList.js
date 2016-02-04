Ext.define('Base.view.entity.EntityColumnList', {
	
	extend : 'Ext.grid.Panel',
	
	requires : ['Ext.ux.CheckColumn'],
	
	xtype : 'base_entity_column_list',
	
	title : T('title.entity_column'),
	
	store : Ext.create('Ext.data.Store', {
		model : 'Base.model.EntityColumn'
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
		width : 100,
		editor : {
			xtype : 'textfield',
			allowBlank : false
		}
	}, { 
		dataIndex : 'description',
		header : T('label.description'),
		width : 100,
		editor : {
			xtype : 'textfield'
		}
	}, /*{ 
		dataIndex : 'term',
		header : T('label.term'),
		width : 160,
		editor : {
			xtype : 'textfield'
		},
		renderer : function(value, metaData, record, row, col, store, gridView) {
			return value ? value : (record.data.name ? 'label.' + record.data.name : '');
		}
	},*/ { 
		dataIndex : 'ref_type',
		header : T('label.ref_type'),
		width : 100,
		editor : {
			xtype : 'codecombo', 
			commonCode : 'ENTITY_REF_TYPE'
		}
	}, { 
		dataIndex : 'ref_name',
		width : 100,
		header : T('label.ref_name'),
		editor : {
			xtype: 'textfield'
		}
	}, { 
		dataIndex : 'col_type',
		header : T('label.type'),
		width : 70,
		editor : {
			allowBlank : false,
			xtype : 'codecombo', 
			commonCode : 'ENTITY_FIELD_TYPE'
		}
	}, { 
		dataIndex : 'col_size',
		header : T('label.size'),
		width : 50,
		align : 'right',
		editor : {
			xtype : 'numberfield', 
			minValue : 0
		}
	}, { 
		dataIndex : 'nullable',
		header : T('label.nullable'),
		width : 70,
		xtype : 'checkcolumn'
	}, { 
		dataIndex : 'def_val',
		header : T('label.default'),
		width : 100,
		editor : {
			xtype: 'textfield'
		}
	}, { 
		dataIndex : 'uniq_rank',
		header : T('label.uniq_rank'),
		width : 100,
		align : 'right',
		editor : {
			xtype : 'numberfield', 
			minValue : 0
		}
	}, { 
		dataIndex : 'list_rank',
		header : T('label.list_rank'),
		width : 80,
		align : 'right',
		editor : {
			xtype : 'numberfield',
			minValue : 0
		}
	} ],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'locale', 'create', 'add', 'save', 'delete']
	} ],
	
	gridAlias : 'columns',
	
	getNewRecord : function(entity_id) {
		return {
			id : '',
			entity_id : entity_id,
			name : '',
			description : '',
			term : '',
			col_type : 'string',
			col_size : 0,
			nullable : false,
			def_val : '',
			uniq_rank : 0,
			ref_type : '',
			ref_name : '',
			list_rank : 0,
			disp_rank : (this.store.getCount() + 1) * 10,
			_cud_flag_ : ''
		};
	}
});