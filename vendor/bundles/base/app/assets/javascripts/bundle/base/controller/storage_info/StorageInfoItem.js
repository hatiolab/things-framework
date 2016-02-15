/**
 * StorageInfoDetail controller
 */
Ext.define('Base.controller.storage_info.StorageInfoItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.StorageInfo', 
		'Base.store.StorageInfo', 
		'Base.view.storage_info.StorageInfoItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle'
	],
	
	models : ['Base.model.StorageInfo'],
			
	stores : ['Base.store.StorageInfo'],
	
	views : ['Base.view.storage_info.StorageInfoItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_storage_info_item' : this.EntryPoint(),
			'base_storage_info_form' : this.FormEventHandler()
		});
	},
	
	/****************************************************************
	 ** 					여기는 customizing area 				   **
	 ****************************************************************/
	// Customized code here ...
	
	/****************************************************************
	 ** 					Override 구현 						   **
	 ****************************************************************/

	
	/****************************************************************
	 ** 					abstract method, 필수 구현 				   **
	****************************************************************/

});