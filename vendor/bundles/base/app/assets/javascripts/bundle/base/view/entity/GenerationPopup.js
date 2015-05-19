Ext.define('Base.view.entity.GenerationPopup', {
	
	extend : 'Frx.common.Popup',
	
	requires : 'Base.store.Menu',

	xtype : 'base_generation_popup',
	
	title : T('button.generation'),
	
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	width : 900,
	
	height : 500,
	
	autoScroll : true,
	
	items : [ {
		xtype : 'tabpanel',
		autoScroll : true,
		items : [ {
			title : 'Common',
			xtype : 'form',
			itemId : 'commonform',
			defaults : { xtype : 'textfield', anchor : '100%' },
			items : [ { 
				name : 'id', hidden : true 
			}, { 
				name : 'name', fieldLabel : T('label.entity'), readOnly : true 
			}, { 
				name : 'bundle', fieldLabel : T('label.bundle'), readOnly : true 
			}, { 
				name : 'description', fieldLabel : T('label.description'), readOnly : true 
			}, {
				name : 'use_attachment',
				fieldLabel : T('label.use') + ' ' + T('label.attachment'),
				xtype : 'checkbox',
				inputValue : true
			}, {
				name : 'use_ext_prop',
				fieldLabel : T('label.use') + ' ' + T('label.property'),
				xtype : 'checkbox',
				inputValue : true
			}, {
				name : 'create_table',
				fieldLabel : T('button.generate_table'),
				xtype : 'checkbox',
				inputValue : true
			} ]
		}, {
			title : 'API',
			xtype : 'form',
			itemId : 'apiform',
			defaults : { xtype : 'textfield', anchor : '100%' },
			items : [ {
				name : 'api_gen_type',
				fieldLabel : T('label.type'),
				xtype : 'combo',
				store : Ext.create('Ext.data.Store', {
				    fields : ['name', 'value'],
				    data : [
						{ name : 'Model + API', value : 'all' },
						{ name : 'Model', value : 'model' },
						{ name : 'None', value : 'none' }
				    ]
				}),
				queryMode: 'local',
				displayField: 'name',
				valueField: 'value',
				value : 'all'
			}, {
				name : 'api_id_type',
				fieldLabel : T('label.id_type'),
				xtype : 'combo',
				store : Ext.create('Ext.data.Store', {
				    fields : ['name', 'value'],
				    data : [
						{ name : 'UUID', value : 'uuid' },
						{ name : 'Meaningful (domain_id + name)', value : 'meaningful' },
						{ name : 'Auto Increment', value : 'auto-increment' },
						{ name : 'None', value : 'none' }
				    ]
				}),
				queryMode: 'local',
				displayField: 'name',
				valueField: 'value',
				value : 'auto-increment'
			}, {
				name : 'api_runtime_opt',
				fieldLabel : T('label.runtime_option'),
				xtype : 'combo',
				store : Ext.create('Ext.data.Store', {
				    fields: ['name', 'value'],
				    data : [
						{ name : 'Overwrite files that already exist', value : '--force' },
						{ name : 'Skip files that already exist', value : '--skip' }
				    ]
				}),
				queryMode: 'local',
				displayField: 'name',
				valueField: 'value',
				value : '--force'
			}, {
				name : 'api_del_trace',
				fieldLabel : T('label.del_history'),
				xtype : 'checkbox',
				inputValue : true
			} ]
		}, {
			xtype : 'form',
			title : 'View',
			itemId : 'viewform',
			defaults : { xtype : 'textfield', anchor : '100%' },
			items : [ { 
				name : 'view_skip',
				fieldLabel : 'View ' + T('label.skip'),
				xtype : 'checkbox',
				inputValue : true
			}, {
				name : 'view_type',
				fieldLabel : T('label.type'),
				xtype : 'combo',
				store : Ext.create('Ext.data.Store', {
				    fields: ['name', 'value'],
				    data : [
						{ name : 'LIST',   value : 'list'   },
						{ name : 'DETAIL', value : 'detail' },
						{ name : 'REPORT', value : 'report' }
				    ]
				}),
				queryMode : 'local',
				displayField : 'name',
				valueField : 'value',
				value : 'list'
			}, {
				name : 'view_detail_type',
				fieldLabel : T('label.detail_view_type'),
				xtype : 'combo',
				store : Ext.create('Ext.data.Store', {
				    fields : ['name', 'value'],
				    data : [
						{ name : 'NONE',  value : 'none'  },
						{ name : 'VIEW',  value : 'view'  },
						{ name : 'POPUP', value : 'popup' }
				    ]
				}),
				queryMode : 'local',
				displayField : 'name',
				valueField : 'value',
				value : 'view'
			}, {
				name : 'view_skip_store',
				fieldLabel : 'Store ' + T('label.skip'),
				xtype : 'checkbox',
				inputValue : true
			}, {
				name : 'view_runtime_opt',
				fieldLabel : T('label.runtime_option'),
				xtype : 'combo',
				store : Ext.create('Ext.data.Store', {
				    fields : ['name', 'value'],
				    data : [
						{ name : 'Overwrite files that already exist', value : '--force'},
						{ name : 'Skip files that already exist', 	   value : '--skip'}
				    ]
				}),
				queryMode : 'local',
				displayField : 'name',
				valueField : 'value',
				value : '--force'
			}, {
				name : 'view_parent_menu',
				fieldLabel : T('label.menu'),
				itemId : 'parent_menu',
				xtype : 'combo',
				store : Ext.create('Ext.data.Store', {
				    fields: ['name']
				}),
				queryMode : 'local',
				displayField : 'name',
				valueField : 'name'
			} ]
		}, {
			title : 'Columns',
			xtype : 'grid',
			itemId : 'columngrid',
			flex : 1,
			autoScroll : true,
			
			store : Ext.create('Ext.data.Store', {
				model : 'Base.model.EntityColumn'
			}),
		
		    plugins : [ Ext.create('Ext.grid.plugin.CellEditing', {
		        clicksToEdit : 1,
		        autoCancel : true
		    }) ],
	
			columns : [ { 
				dataIndex : 'disp_rank',
				hidden : true
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
				width : 100
			}, { 
				dataIndex : 'description',
				header : T('label.description'),
				width : 100
			}/*, { 
				dataIndex : 'term',
				header : T('label.term'),
				width : 150,
				editor : {
					xtype : 'textfield'
				}
			}*/, {
				dataIndex : 'editable',
				header : T('label.editable') + " *",
				width : 80,
				xtype : 'checkcolumn'
			}, {
				dataIndex : 'trimable',
				header : T('label.trim') + " *",
				width : 70,
				xtype : 'checkcolumn'
			}, { 
				dataIndex : 'search_rank',
				header : T('label.search_rank') + " *",
				width : 110,
				align : 'right',
				editor : {
					xtype : 'numberfield',
					minValue : 0
				}
			}, { 
				dataIndex : 'sort_rank',
				header : T('label.sort_rank') + " *",
				width : 90,
				align : 'right',
				editor : {
					xtype : 'numberfield',
					minValue : 0
				}
			}, { 
				dataIndex : 'reverse_sort',
				header : T('label.reverse_sort') + " *",
				width : 105,
				xtype : 'checkcolumn'
			}, {
				dataIndex : 'min',
				header : T('label.minimum') + " *",
				width : 60,
				editor : {
					xtype : 'numberfield'
				}
			}, {
				dataIndex : 'max',
				header : T('label.maximum') + " *",
				width : 60,
				editor : {
					xtype : 'numberfield'
				}
			}, { 
				dataIndex : 'ref_type',
				header : T('label.ref_type'),
				width : 100
			}, { 
				dataIndex : 'ref_name',
				width : 100,
				header : T('label.ref_name')
			}, { 
				dataIndex : 'col_type',
				header : T('label.type'),
				width : 70
			}, { 
				dataIndex : 'col_size',
				header : T('label.size'),
				width : 50,
				align : 'right'
			}, { 
				dataIndex : 'nullable',
				header : T('label.nullable'),
				width : 70,
				xtype : 'checkcolumn',
				editable : false
			}, { 
				dataIndex : 'def_val',
				header : T('label.default'),
				width : 100
			}, { 
				dataIndex : 'uniq_rank',
				header : T('label.uniq_rank'),
				width : 100,
				align : 'right'
			}, { 
				dataIndex : 'list_rank',
				header : T('label.list_rank'),
				width : 80,
				align : 'right'
			} ]
		} ]
	} ],
	
	setRecord : function(record) {
		var commonForm = this.down(' #commonform').loadRecord(record);
		var menus = [];
		Ext.getStore('Menu').each(function(menu) {
			if(menu.get('menu_type') == 'MENU') {
				menus.push({name : menu.data.name});
			}
		});
		this.down(' #parent_menu').store.loadRawData(menus);
		Ext.Ajax.request({
			url : 'entities/' + record.get('id') + '/entity_columns.json',
			method : 'GET',
			success : function(response) {
				var res = Ext.JSON.decode(response.responseText);
				this.down('grid').store.loadRawData(res.items);
			},
			scope : this
		});
	},
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'generation']
	} ]
});