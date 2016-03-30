Ext.define('Base.view.diy_grid.DiyGridItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 'Base.view.diy_grid.DiyGridForm'],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_diy_grid_item',
	
	title : T('menu.DiyGrid'),
	
	items : [ 
		{ xtype : 'base_diy_grid_form' }
	]
});