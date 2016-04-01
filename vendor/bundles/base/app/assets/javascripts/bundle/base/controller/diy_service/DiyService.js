/**
 * DiyService controller
 */
Ext.define('Base.controller.diy_service.DiyService', {
	
	extend: 'Frx.controller.ListController',
		
	requires : [ 
		'Base.model.DiyService', 
		'Base.store.DiyService', 
		'Base.view.diy_service.DiyService' 
	],
		
	models : ['Base.model.DiyService'],
			
	stores: ['Base.store.DiyService'],
	
	views : ['Base.view.diy_service.DiyService'],
	
	init: function() {
		this.callParent(arguments);
		
		this.control({
			'base_diy_service' : this.EntryPoint(),
			'base_diy_service #goto_item' : {
				click : this.onGotoItem
			}
		});
	},

	/**
	 * override : 서버로 전달되서는 안 되는 값을 제거하거나 값을 선처리한다.
	 */
	validateMultipleUpdateData : function(data) {
		this.callParent(arguments);
		delete data['service_in_params'];
		delete data['service_out_params'];
		return data;
	}

});