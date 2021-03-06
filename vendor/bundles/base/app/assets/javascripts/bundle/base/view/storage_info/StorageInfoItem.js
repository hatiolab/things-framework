Ext.define('Base.view.storage_info.StorageInfoItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 
		'Base.view.storage_info.StorageInfoForm',
		'Base.view.storage_info.StorageFiles'
	],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_storage_info_item',
	
	title : T('menu.StorageInfo'),
	
	items : [ 
		{ xtype : 'base_storage_info_form' },
		{ xtype : 'base_storage_info_files' }
	]
});