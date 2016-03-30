/**
 * DiyFormDetail controller
 */
Ext.define('Base.controller.diy_form.DiyFormItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.DiyForm', 
		'Base.store.DiyForm', 
		'Base.view.diy_form.DiyFormItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle'
	],
	
	models : ['Base.model.DiyForm'],
			
	stores : ['Base.store.DiyForm'],
	
	views : ['Base.view.diy_form.DiyFormItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_diy_form_item' : this.EntryPoint(),
			'base_diy_form_form' : this.FormEventHandler(),
			'base_diy_form_search_fields_editor' : this.FormEventHandler(),
			'base_diy_form_detail_fields_editor' : this.FormEventHandler()	
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