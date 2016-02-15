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
		'Frx.mixin.lifecycle.FormLifeCycle',
		'Frx.mixin.lifecycle.ListLifeCycle'
	],
	
	models : ['Base.model.StorageInfo'],
			
	stores : ['Base.store.StorageInfo'],
	
	views : ['Base.view.storage_info.StorageInfoItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_storage_info_item' : this.EntryPoint(),
			'base_storage_info_form' : this.FormEventHandler(),
			'base_storage_info_files' : this.ListEventHandler({
				'after_load_item' : this.onAfterLoadItemForFiles
			})
		});
	},
	
	onAfterLoadItemForFiles : function(grid, records, operation) {
		Ext.Ajax.request({
			url: 'attachments.json',
			method: 'GET',
			scope : this,
			success: function(response) {
				var res = Ext.JSON.decode(response.responseText);
				console.log(res);
			}
		});
	}

});