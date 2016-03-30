/**
 * DiyGrid controller
 */
Ext.define('Base.controller.diy_grid.DiyGrid', {
	
	extend : 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.DiyGrid', 
		'Base.store.DiyGrid', 
		'Base.view.diy_grid.DiyGrid' 
	],
	
	models : ['Base.model.DiyGrid'],
			
	stores : ['Base.store.DiyGrid'],
	
	views : ['Base.view.diy_grid.DiyGrid'],
		
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_diy_grid' : this.EntryPoint(),
			'base_diy_grid #goto_item' : {
				click : this.onGotoItem
			}
		});
	}

});