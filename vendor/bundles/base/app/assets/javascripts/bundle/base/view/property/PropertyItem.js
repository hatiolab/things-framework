Ext.define('Base.view.property.PropertyItem', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_property_item',
	
	mixins : {
		spotlink : 'Frx.mixin.view.SpotLink'
	},

	title : T('menu.Property'),
	
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	defaults : {
		xtype : 'textfield'
	},
	
	items : [		
		{ name : 'id', fieldLabel : T('label.id'), hidden : true },
		{ name : 'on_type', fieldLabel : T('label.on_type'), readOnly : true },
		{ name : 'on_id', fieldLabel : T('label.on_id'), readOnly : true },
		{ name : 'name', fieldLabel : T('label.name') },
		{ name : 'value', fieldLabel : T('label.value') },
		{ xtype : 'timestamp' }
	],
	
	dockedItems: [{
		xtype: 'controlbar',
		items: ['->', 'save', 'delete']
	}]
});
