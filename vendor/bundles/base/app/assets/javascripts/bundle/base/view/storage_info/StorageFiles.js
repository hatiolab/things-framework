Ext.define('Base.view.storage_info.StorageFiles', {

	extend: 'Ext.panel.Panel',

	xtype: 'base_storage_info_files',

	title: T('button.file'),

	layout: {
		type: 'vbox',
		align: 'stretch'
	},

	items: [{
		xtype: 'component',
		itemId: 'grdContainer',
		id: 'grdMain',
		flex: 1
	}, {
		xtype: 'form',
		bodyPadding: 5,
		itemId: 'downloadForm',
		width: 350,
		hidden : false,

		// The form will submit an AJAX request to this URL when submitted
		url: 'download',

		// Fields will be arranged vertically, stretched to full width
		layout: 'anchor',
		defaults: {
			anchor: '100%'
		},

		// The fields
		defaultType: 'textfield',
		items: [{
			fieldLabel: 'params',
			itemId : 'formParam',
			name: 'params'
		}]
	}],

	dockedItems: [{
		xtype: 'controlbar',
		items: ['->', 'show', 'export','download']
	}]

});