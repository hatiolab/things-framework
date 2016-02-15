/**
 * StorageInfo controller
 */
Ext.define('Base.controller.storage_info.StorageInfo', {
	
	extend : 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.StorageInfo', 
		'Base.store.StorageInfo', 
		'Base.view.storage_info.StorageInfo' 
	],
	
	models : ['Base.model.StorageInfo'],
			
	stores : ['Base.store.StorageInfo'],
	
	views : ['Base.view.storage_info.StorageInfo'],
		
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_storage_info' : this.EntryPoint(),
			'base_storage_info #goto_item' : {
				click : this.onGotoItem
			}
		});
	}

});