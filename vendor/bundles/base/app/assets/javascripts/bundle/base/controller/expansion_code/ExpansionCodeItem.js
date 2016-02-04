/**
 * ExpansionCodeDetail controller
 */
Ext.define('Base.controller.expansion_code.ExpansionCodeItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.view.expansion_code.ExpansionCodeItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle',
		'Frx.mixin.lifecycle.ListLifeCycle'
	],
	
	models : [ 'Base.model.ExpansionCode', 'Base.model.ExpansionCodeItem', 'Base.model.CodeExpansion' ],
	
	stores : [ 'Base.store.ExpansionCode', 'Base.store.ExpansionCodeItem', 'Base.store.CodeExpansion' ],
	
	views : ['Base.view.expansion_code.ExpansionCodeItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_expansion_code_item' : this.EntryPoint(),
			'base_expansion_code_form' : this.FormEventHandler(),
			'base_expansion_code_item_list' : this.ListEventHandler({
				'after_load_item' : this.loadColumnList
			}),
			'base_expansion_code_data_list' : this.ListEventHandler({
				'after_load_item' : this.loadDataList
			}),
		});
	},
	
	/****************************************************************
	 ** 					Override 구현 						   **
	 ****************************************************************/
	/**
	 * load column list
	 */
	loadColumnList : function(grid, record, operation) {
		grid.getStore().loadData(record.get('items'));
	},
	
	/**
	 * load data list
	 */
	loadDataList : function(grid, record, operation) {
		var store = grid.getStore();
		store.removeAll();
		store.getProxy().extraParams = { "expansion_code_id-eq" : record.get('id') };
		store.load();
		
		// 그리드의 헤더를 expansion code item 정보를 참조하여 수정하고 컬럼의 에디터도 수정한다.
		var metaGrid = grid.up().down('base_expansion_code_item_list');
		var metaStore = metaGrid.getStore();
		var metaCnt = metaStore.getCount();
		
		if(metaCnt == 0) {
			this.setDefaultColumns(grid, store);
		} else {
			this.setColumnsByMetadata(grid, store, metaGrid, metaStore);
		}
	},
	
	/**
	 * configure default columns
	 */
	setDefaultColumns : function(dataGrid, dataStore) {
		var columns = [];
		columns.push(Ext.create('Ext.grid.column.Column', {
			text : 'ID',
			dataIndex : 'id',
			hidden : true
		}));
		
		columns.push(Ext.create('Ext.grid.column.Column', {
			text : T('menu.ExpansionCode'),
			dataIndex : 'expansion_code_id',
			hidden : true
		}));
		
		for(var i = 1 ; i <= 10 ; i++) {
			columns.push( Ext.create('Ext.grid.column.Column', {
				text : 'Data ' + i,
				dataIndex : 'data_' + i,
				flex : 1
			}));
		}
		
		dataGrid.reconfigure(dataStore, columns); 
	},
	
	/**
	 * configure dynamic column
	 */
	setColumnsByMetadata : function(dataGrid, dataStore, metaGrid, metaStore) {
		var columns = dataGrid.columns;
		var colCnt = columns.length;
		var metaCnt = metaStore.getCount();
		
		var columns = [];
		columns.push(Ext.create('Ext.grid.column.Column', {
			text : 'ID',
			dataIndex : 'id',
			hidden : true
		}));
		
		columns.push(Ext.create('Ext.grid.column.Column', {
			text : T('menu.ExpansionCode'),
			dataIndex : 'expansion_code_id',
			hidden : true
		}));
		
		for(var i = 0 ; i < metaCnt ; i++) {
			var record = metaStore.getAt(i);
			var col = {
				text : record.get('name'),
				dataIndex : 'data_' + record.get('bind_index'),
				flex : 1
			};
			
			var refType = record.get('ref_type');
			var refName = record.get('ref_name');
			var allowBlank = record.get('unique_flag') ? false : (record.get('nullable') ? true : false);
		
			if(Ext.isEmpty(refType)) {
				var colType = record.get('col_type');
				
				if(colType == 'boolean') {
					col.xtype = 'checkcolumn';
					col.allowBlank = allowBlank;
					
				} else if(colType == 'decimal' || colType == 'float' || colType == 'integer') {
					col.xtype = 'numbercolumn';
					col.align = 'right';
					col.editor = {
						xtype : 'numberfield',
						allowBlank : allowBlank
					};
				} else if(colType == 'date') {
					col.xtype = 'datecolumn';
					col.format = T('format.datetime');
					col.editor = {
						xtype : 'datefield',
						allowBlank : allowBlank
					};
				} else {
					col.editor = {
						xtype : 'textfield',
						maxLength : record.get('col_size') > 0 ? record.get('col_size') : 255,
						allowBlank : allowBlank
					};
				}
			} else {
				if(refType == 'CommonCode') {
					col.editor = {
						xtype : 'codecombo',
						commonCode : refName,
						allowBlank : allowBlank
					};
				} else {
					col.xtype = 'entitycolumn';
					col.editor = {
						xtype : 'entitycolumneditor',
						storeClass : refName
					};
				}
			}
			
			columns.push(col);
		}
		
		dataGrid.reconfigure(dataStore, columns);
	},
	
	/**
	 * grid에 row 추가 
	 *
	 * @grid
	 * @record
	 */
	addGridRecord : function(grid, record) {
		grid.store.add(record);
		grid.plugins[0].startEditByPosition({row: 0, column: 0});
		grid.fireEvent('after_add_record', grid, record);
	},
		
	/**
	 * 모델 생성
	 *
	 * @grid
	 */
	newRecord : function(grid) {
		return Ext.create(grid.getStore().model, {
			expansion_code_id : grid.up().getParams().id,
			bind_index : grid.getStore().getCount() + 1
		});
	},
	
	/**
	 * multiple update url을 리턴 
	 */
	getUpdateListUrl : function(grid) {
		var expansionCodeId = grid.up().getParams().id;
		
		if(grid.xtype == 'base_expansion_code_item_list') {
			return "expansion_codes/" + expansionCodeId + "/update_multiple_items.json";
		} else {
			return "code_expansions/update_multiple.json";
		}
	},
	
	onAfterUpdateList : function(grid, updateType, response) {
		var view = grid.up();
		this.loadItem(view, view.getParams());
	},
});