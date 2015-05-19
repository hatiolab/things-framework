/**
 * EntityItem controller
 */
Ext.define('Base.controller.entity.EntityItem', {

	extend: 'Frx.controller.ItemController',
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle',
		'Frx.mixin.lifecycle.ListLifeCycle',
		'Frx.mixin.lifecycle.PopupLifeCycle'
	],

	requires : [ 
		'Base.model.Entity', 
		'Base.model.EntityColumn', 
		'Base.store.Entity', 
		'Base.view.entity.EntityItem',
		'Base.view.entity.EntityLogicPopup',
		'Base.view.entity.GenerationPopup'
	],

	models : ['Base.model.Entity', 'Base.model.EntityColumn'],

	stores: ['Base.store.Entity'],

	views : ['Base.view.entity.EntityItem'],

	init: function() {
		this.callParent(arguments);

		this.control({
			'base_entity_item' : this.EntryPoint(),
			'base_entity_form' : this.FormEventHandler({
				click_generation : this.onGeneration
			}),
			'base_entity_column_list' : this.ListEventHandler({
				after_load_item : this.onLoadItemForDetail,
				click_locale : this.onLocaleClick,
				click_create : this.onClickCreateColumns
			}),
			'base_entity_prop_list' : this.ListEventHandler({
				after_load_item : this.onLoadItemForDetail
			}),
			'base_entity_logic_list' : this.ListEventHandler({
				after_load_item : this.onLoadItemForDetail,
			}),
			'base_entity_logic_list #goto_item' : {
				click : this.onClickLogicPopup
			},
			'base_entity_logic_popup' : this.PopupEventHandler({
				click_save : this.onPopupSave
			}),
			'base_generation_popup' : this.PopupEventHandler({
				click_generation : this.onPopupGenerate
			})
		});
	},

	/****************************************************************
	 ** 					여기는 customizing area 					**
	 ****************************************************************/
	/**
	 * Generation 가능한지 체크 
	 */
	checkGeneration : function(view) {
		if(this.record.get('bundle') == 'base') {
			//HF.msg.notice(T('text.Base bundle not allowed'));
			//return false;
			return true;
		} else {
		 	return true;
		}
	},
	
	/**
	 * popup close button click시 
	 */
	onPopupClose : function(popup) {
		popup.close();
	},

	/**
	 * popup save button click시 
	 */
	onPopupSave : function(popup) {
		var logicId = popup.down('form').getForm().getValues().id;
		var logic = popup.down('form').down('component#editor').editor.getValue();
		var data = [ {"id" : logicId, "logic" : logic, "_cud_flag_" : (logicId ? 'u' : 'c')} ];
		Ext.Ajax.request({
			url : 'entities/' + this.record.get('id') + '/update_multiple_entity_logics.json',
			method : 'POST',
			params : { multiple_data : Ext.JSON.encode(data) },
			success : function(response) {
				var res = Ext.JSON.decode(response.responseText);
				HF.current.view().down('base_entity_logic_list').store.loadRawData(res.items);
				popup.close();
			},
			scope : this
		});
	},
	
	/**
	 * popup 호출시 
	 */
	onPopupParamsChange : function(view, params) {
		view.setRecord(params);
	},

	/**
	 * popup button click 시 
	 */
	onClickLogicPopup : function(grid, td, rowIdx, colIdx, event, record, tr) {
		HF.popup('Base.view.entity.EntityLogicPopup', record, {});
	},

	/**
	 * generate button click 시 
	 */	
	onPopupGenerate : function(popup) {
		HF.msg.confirm( {
			msg : T('text.Sure to Generate'), 
			fn : function(btn) {
				if(btn == 'yes') {
					var commonForm = popup.child(' #commonform');
					var apiForm = popup.child(' #apiform');
					var viewForm = popup.child(' #viewform');
					var params = commonForm.getForm().getValues();
					params = Ext.merge(params, apiForm.getForm().getValues());
					params = Ext.merge(params, viewForm.getForm().getValues());
					
					var columns = [], grid = popup.child(' #columngrid');
					grid.store.each(function(record) {
						columns.push({
							id : record.data.id,
							editable : record.data.editable,
							trimable : record.data.trimable,
							min : record.data.min,
							max : record.data.max,
							search_rank : record.data.search_rank,
							sort_rank : record.data.sort_rank,
							reverse_sort : record.data.reverse_sort
						});
					});
					
					params.columns = Ext.JSON.encode(columns);
					Ext.Ajax.request({
						url : 'entities/' + this.record.get('id') + '/generate.json',
						timeout : 180000,
						method : 'POST',
						params : params,
						success : function(response) {
							var result = Ext.JSON.decode(response.responseText);
							popup.close();
							this.showPopupResult(T('title.' + (result.success ? 'success' : 'failure')), result.msg);
				    	},
						scope : this
					});
				}
			}, 
			scope : this,
		});
	},

	/**
	 * multiple update url을 리턴 
	 */
	getUpdateListUrl : function(grid) {
		return 'entities/' + this.record.get('id') + '/update_multiple_entity_' + grid.gridAlias + '.json';
	},
	
	/**
	 * create click시  
	 */
	onClickCreateColumns : function(grid) {
		HF.msg.confirm({
			msg : T('text.Sure to Create Fields'), 
			fn : function(btn) {
				if(btn == 'yes') {
					Ext.Ajax.request({
						url : 'entities/' + this.record.get('id') + '/create_entity_columns.json',
						method : 'POST',
						success : function(response) {
							var res = Ext.JSON.decode(response.responseText);
							grid.store.loadRawData(res.items);
				    	},
						scope : this
					});
				}
			}, 
			scope : this 
		});
	},

	/**
	 * generate button click
	 */	
	onGeneration : function(form) {
		if(this.checkGeneration(form)) {
			HF.popup('Base.view.entity.GenerationPopup', this.record, {});
		}
	},

	/**
	 * locale button click 시
	 */
	onLocaleClick : function(grid) {
		var selectionModel = grid.getSelectionModel();
		var model = selectionModel.getSelection();
		var arrName = [];
		for(i = 0 ; i < model.length ; i++) {
			arrName.push("'" + model[i].data.name + "'" + " : " + "'" + HF.humanize(model[i].data.name) + "'");
		}
		this.showPopupResult(T('label.locale'), arrName.join(',\n'));
	},

	/**
	 * 결과 창 표시
	 */
	showPopupResult : function(title, result) {
		Ext.create('Ext.window.Window', {
		    title : title,
		    height : 400,
		    width : 800,
			autoScroll : true,
		    layout : 'fit',
		    items : {
		        xtype : 'panel',
		        border : false,
		        defaults : { xtype : 'textarea', anchor : '100%' },
		        layout : 'fit',
		        items : [ {
		            name : 'test',
		            value : result
		        } ]
		    }
		}).show();
	},
	
	addGridRecord : function(grid, record) {
		grid.store.insert(grid.getStore().getCount(), record);
		grid.plugins[0].startEditByPosition({row: 0, column: 0});
		grid.fireEvent('after_add_record', grid, record);
	},

	/****************************************************************
	 ** 					Override 구현 						   **
	 ****************************************************************/
	/**
	 * after load item - entity columns
	 */
	onLoadItemForDetail : function(view, record, operation) {
		if(view.gridAlias == 'columns') {
			this.record = record;
		}
		
		var url = 'entities/' + record.get('id') + '/entity_' + view.gridAlias + '.json';
		Ext.Ajax.request({
			url : url,
			method : 'GET',
			success : function(response) {
				var res = Ext.JSON.decode(response.responseText);
				view.store.loadRawData(res.items);
			}
		});
	},
	
	/**
	 * override - get item record before save
	 */
	getItemRecord : function(view) {
		if(view instanceof Ext.form.Panel) {
			var form = view.getForm();
			var values = form.getValues();
			var entity = form.getRecord();
			if(values.item_infographic && values.item_infographic.id) {
				values.item_infographic_id = values.item_infographic.id;
			}
			if(values.list_infographic && values.list_infographic.id) {
				values.list_infographic_id = values.list_infographic.id;
			}
			if(entity) {
				entity.data = Ext.merge(entity.data, values);
			}
			
			delete entity.data["list_infographic"] 
			delete entity.data["item_infographic"]
			delete entity.data["created_at"] 
			delete entity.data["updated_at"]
			delete entity.data["creator_id"]
			delete entity.data["updater_id"]
			delete entity.data["creator"]
			delete entity.data["updater"]
			delete entity.data["_cud_flag_"]
			return entity;
		}
	},

	/**
	 * 데이터 생성을 위한 새로운 엔티티 생성 
	 */
	newRecord : function(grid) {
		return grid.getNewRecord(this.record.get('id'));
	}
});