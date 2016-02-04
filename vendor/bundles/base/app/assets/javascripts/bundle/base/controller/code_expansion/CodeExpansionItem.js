/**
 * CodeExpansionDetail controller
 */
Ext.define('Base.controller.code_expansion.CodeExpansionItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.CodeExpansion', 
		'Base.store.CodeExpansion', 
		'Base.view.code_expansion.CodeExpansionItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle'
	],
	
	models : ['Base.model.CodeExpansion'],
			
	stores : ['Base.store.CodeExpansion'],
	
	views : ['Base.view.code_expansion.CodeExpansionItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_code_expansion_item' : this.EntryPoint(),
			'base_code_expansion_form' : this.FormEventHandler()
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