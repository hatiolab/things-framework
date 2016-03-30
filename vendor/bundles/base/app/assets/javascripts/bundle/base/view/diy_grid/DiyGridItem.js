Ext.define('Base.view.diy_grid.DiyGridItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 
		'Base.view.diy_grid.DiyGridForm',
		'Base.view.diy_grid.DiyGridConfigEditor',
		'Base.view.diy_grid.DiyGridFieldsEditor',
		'Base.view.diy_grid.DiyGridColumnsEditor',
	],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_diy_grid_item',
	
	title : T('menu.DiyGrid'),
	
	items : [ { 
		xtype : 'base_diy_grid_form' 
	}, {
		xtype : 'base_diy_grid_config_editor'
	}, {
		xtype : 'base_diy_grid_fields_editor'
	}, {
		xtype : 'base_diy_grid_columns_editor'
	} ]
});