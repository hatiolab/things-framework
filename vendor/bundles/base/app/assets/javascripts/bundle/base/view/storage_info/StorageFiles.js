Ext.define('Base.view.storage_info.StorageFiles', {
	
	extend : 'Ext.panel.Panel',
	
	requires : ['Ext.ux.CheckColumn'],
	
	xtype : 'base_storage_info_files',
	
	title : T('title.files'),
		
	initComponent : function() {
		// TODO add datarudi here

		this.callParent();
	}
	
});
