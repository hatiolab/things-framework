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
	 * override
	 */
	validateMultipleUpdateData : function(data) {		
		Ext.Array.each(['service_logic', 'service_in_params', 'service_out_params', 'creator', 'updater', 'creator_id', 'created_at', 'updater_id', 'updated_at'], function(key) {
			delete data[key];
		});
		
		return data;
	}	

});