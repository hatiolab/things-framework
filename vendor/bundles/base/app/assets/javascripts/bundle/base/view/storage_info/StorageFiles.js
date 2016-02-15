Ext.define('Base.view.storage_info.StorageFiles', {
	
	extend : 'Ext.panel.Panel',
		
	xtype : 'base_storage_info_files',
	
	title : T('button.file'),

	layout : {
		type : 'vbox',
		align : 'stretch'
	},

	items : [{
		xtype : 'component',
		itemId : 'grdContainer',
		id : 'grdMain',
		flex : 1
	}],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'show']
	} ]
	
});
