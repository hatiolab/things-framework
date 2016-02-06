/**
 * RestDetail controller
 */
Ext.define('Base.controller.rest.RestItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.RestApi', 
		'Base.store.RestApi', 
		'Base.view.rest.RestItem',
		'Base.view.rest.RestApiDetailPopup'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle',
		'Frx.mixin.lifecycle.ListLifeCycle',
		'Frx.mixin.lifecycle.PopupLifeCycle'
	],
	
	models : ['Base.model.RestApi'],
			
	stores : ['Base.store.RestApi'],
	
	views : ['Base.view.rest.RestItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_rest_item' : this.EntryPoint(),
			'base_rest_item #goto_item' : {
				click : this.onGotoDetail
			},			
			'base_rest_form' : this.FormEventHandler(),
			'base_rest_api_list' : this.ListEventHandler({
				'after_load_item' : this.onAfterLoadItemForList
			}),
			'base_rest_api_detail_popup' : this.PopupEventHandler({
				click_invoke : this.onPopupInvoke
			})			
		});
	},
	
	/**
	 * Load Item 이후 
	 */
	onAfterLoadItemForList : function(grid, record, operation) {
		grid.getStore().loadRawData(record.get('api_list'));
	},

	/**
	 * detail 버튼 클릭시  
	 */
	onGotoDetail : function(grid, td, rowIndex, colIndex, event, record, tr) {
		HF.popup('Base.view.rest.RestApiDetailPopup', record);
	},

	/**
	 * popup 호출시 
	 */
	onPopupParamsChange : function(view, params) {
		var api_id = params.data.id;
		Ext.Ajax.request({
			url : '/rests/api/' + api_id,
			method : 'GET',
			params : { api_id : api_id },
			success : function(response) {
				var apiDetail = Ext.JSON.decode(response.responseText);
				view.setRecord(params, apiDetail);
			},
			scope : this
		});
	},

	/**
	 * popup - invoke 버튼 클릭시 
	 */
	onPopupInvoke : function(popup) {
		var testValues = popup.down(' #testform').getForm().getValues();
		var url = testValues['url'];
		url = url.replace('/rest', '');
		var method = testValues['http_method'];
		var inputParams = testValues['input_params'];

		if(this.checkInput(inputParams)) {
			Ext.Ajax.request({
				url : url,
				method : method,
				params : inputParams,
				success : function(response) {
					popup.setResult(response.responseText);
				},
				scope : this
			});
		}		
	},

	checkInput : function(inputParams) {
		if(inputParams == '') {
			HF.msg.alert( { msg : '입력값이 비었습니다.' } );
			return false;
		}

		try {
			return JSON.parse(inputParams);
		} catch(e) {
			HF.msg.alert( { msg : '입력값이 유효하지 않습니다.' } );
			return false;
		}

		return false;
	},

	/**
	 * popup close button click시 
	 */
	onPopupClose : function(popup) {
		popup.close();
	}

});