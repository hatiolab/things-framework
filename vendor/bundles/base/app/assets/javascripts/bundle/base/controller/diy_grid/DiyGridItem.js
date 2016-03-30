/**
 * DiyGridDetail controller
 */
Ext.define('Base.controller.diy_grid.DiyGridItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.DiyGrid', 
		'Base.store.DiyGrid', 
		'Base.view.diy_grid.DiyGridItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle'
	],
	
	models : ['Base.model.DiyGrid'],
			
	stores : ['Base.store.DiyGrid'],
	
	views : ['Base.view.diy_grid.DiyGridItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_diy_grid_item' : this.EntryPoint(),
			'base_diy_grid_form' : this.FormEventHandler()
		});
	},
	
	/****************************************************************
	 ** 					여기는 customizing area 				   **
	 ****************************************************************/
	// Customized code here ...
	
	/****************************************************************
	 ** 					Override 구현 						   **
	 ****************************************************************/

	
	/****************************************************************
	 ** 					abstract method, 필수 구현 				   **
	****************************************************************/

});