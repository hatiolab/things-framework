/**
 * LabelDetail controller
 */
Ext.define('Base.controller.label.LabelItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.Label', 
		'Base.store.Label', 
		'Base.view.label.LabelItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle'
	],
	
	models : ['Base.model.Label'],
			
	stores : ['Base.store.Label'],
	
	views : ['Base.view.label.LabelItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_label_item' : this.EntryPoint(),
			'base_label_form' : this.FormEventHandler()
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