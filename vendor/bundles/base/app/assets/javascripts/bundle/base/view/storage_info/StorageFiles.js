Ext.define('Base.view.storage_info.StorageFiles', {
	
	extend : 'Ext.panel.Panel',
		
	xtype : 'base_storage_info_files',
	
	title : T('title.files'),

	items : [{
		xtype : 'component',
		id : 'grdMain',
		itemId : 'grdContainer',
		width: '740px',
        height: '313px',
        items: [{
        	xtype : 'button',
        	itemId : 'createGrid',
        	text : 'createGrid'
        }]
	}],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'show']
	} ]
	
});
