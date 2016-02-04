Ext.define('Base.view.entity.EntityItem', {

	extend : 'Ext.tab.Panel',
	
 	requires : [ 
		'Base.view.entity.EntityForm',
		'Base.view.entity.EntityColumnList',
		'Base.view.entity.EntityPropList',
		'Base.view.entity.EntityLogicList',
		'Base.view.entity.EntityLogicPopup'
	],

	mixins : {
		spotlink : 'Frx.mixin.view.SpotLink'
	},
	
	xtype : 'base_entity_item',

	title : T('menu.Entity'),

	items : [ {
		xtype : 'base_entity_form'
	}, {
		xtype : 'base_entity_column_list'
	}, {
		xtype : 'base_entity_prop_list'
	}, {
		xtype : 'base_entity_logic_list'
	} ]
});