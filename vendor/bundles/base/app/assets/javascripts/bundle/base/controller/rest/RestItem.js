/**
 * RestDetail controller
 */
Ext.define('Base.controller.rest.RestItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.Rest', 
		'Base.store.Rest', 
		'Base.view.rest.RestItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle'
	],
	
	models : ['Base.model.Rest'],
			
	stores : ['Base.store.Rest'],
	
	views : ['Base.view.rest.RestItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_rest_item' : this.EntryPoint(),
			'base_rest_form' : this.FormEventHandler()
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