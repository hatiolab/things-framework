/**
 * DiyService controller
 */
Ext.define('Base.controller.diy_service.DiyServiceItem', {
	
	extend: 'Frx.controller.ItemController',
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle',
		'Frx.mixin.lifecycle.ListLifeCycle'
	],
	
	requires : [ 
		'Base.model.DiyService', 
		'Base.store.DiyService', 
		'Base.view.diy_service.DiyServiceItem'
	],
	
	models : ['Base.model.DiyService', 'Base.model.ServiceInParam', 'Base.model.ServiceOutParam'],
			
	stores: ['Base.store.DiyService'],
	
	views : ['Base.view.diy_service.DiyServiceItem'],
	
	init: function() {
		this.callParent(arguments);
		
		this.control({
			'base_diy_service_item' : this.EntryPoint(),
			'base_diy_service_form' : this.FormEventHandler(),
			'base_diy_service_in_params_list' : this.ListEventHandler({
				after_load_item : this.onAfterLoadItemElse,
			}),
			'base_diy_service_out_params_list' : this.ListEventHandler({
				after_load_item : this.onAfterLoadItemElse,
			}),
			'base_diy_service_test' : {
				after_load_item : this.onAfterLoadItemElse,
				click_invoke : this.onInvokeClick,
				click_list : this.onClickList
			},
			'base_diy_service_logic' : this.FormEventHandler()
		});
	},
	
	/****************************************************************
	 ** 					여기는 customizing area 				   **
	 ****************************************************************/
	
	/**
	 * Invoke 버튼 클릭 시 
     * @testView
	 */
	onInvokeClick : function(testView) {
		var testParamsForm = testView.child('form');
		var testParams = testParamsForm.getForm().getValues();
		var invokeParams = { 'input' : testParams };

    	Ext.Ajax.request({
		    url : 'diy_services/' + testView._record.get('name') + '/shoot.json?test=y',
		    method : 'POST',
		    jsonData : invokeParams,
		    success : function(response) {
		        var res = Ext.JSON.decode(response.responseText);
				testView.showResult(testView._record.get('service_out_params'), res);
			},
			scope : this
		});
	},
	
	/**
	 * parameter type
	 */
	getParameterType : function(grid) {
		return (grid.xtype == 'base_diy_service_in_params_list') ? 'in' : 'out';
	},
	
	/**
	 * override
	 */	
	getUpdateListUrl : function(grid) {
		var parameterType = this.getParameterType(grid);

		if(HF.setting.get('setting-use_remote_server')) {
			return 'diy_services/' + grid._record.get('id') + '/update_multiple_parameters/' + parameterType + '.json';
		} else {
			return 'diy_services/' + grid._record.get('id') + '/update_multiple_parameters.json?type=' + parameterType;
		}
	},
	
	onAfterLoadItemElse : function(view, record) {
		view._record = record;
		view.setRecord(record);
	},
	
	/**
	 * override
	 */	
	addGridRecord : function(grid, record) {
		grid.store.insert(grid.getStore().getCount(), record);
		grid.plugins[0].startEditByPosition({row: 0, column: 0});
		grid.fireEvent('after_add_record', grid, record);
	},

	/**
	 * 데이터 생성을 위한 새로운 엔티티 생성 
	 */
	newRecord : function(grid) {
		return {
			id : '',
			name : '',
			description : '',
			resource_type : 'DiyService',
			resource_id : grid._record.get('id'),
			rank : (grid.store.getCount() + 1) * 10
		};
	},

	/**
	 * override
	 */	
	onAfterUpdateList : function(grid, updateType, response) {
		if(grid.xtype == 'base_diy_service_in_params_list' || grid.xtype == 'base_diy_service_out_params_list') {
	        var parameters = Ext.JSON.decode(response.responseText);
			grid.store.loadRawData(parameters);
			var successMsg = (updateType == 'd') ? T('text.Success to Delete') : T('text.Success to Update');
			HF.msg.notice(successMsg);
		} else {
			this.callParent(arguments);
		}
	},

	/**
	 * get Item Data modified on the view
	 * 
	 * @view
	 */
	getItemRecord : function(view) {
		if(view instanceof Ext.form.Panel) {
			var form = view.getForm();
			var values = form.getValues();
			var entity = form.getRecord();

			Ext.Array.each(['service_in_params', 'service_out_params', 'creator', 'updater', 'creator_id', 'created_at', 'updater_id', 'updated_at'], function(key) {
				delete entity.data[key];
				delete values[key];
			});

			if(entity) {
				entity.data = Ext.merge(entity.data, values);
			}

			return entity;
		}
	}
	
});