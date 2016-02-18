/**
 * DiyTemplateDetail controller
 */
Ext.define('Base.controller.diy_template.DiyTemplateItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.DiyTemplate', 
		'Base.store.DiyTemplate', 
		'Base.view.diy_template.DiyTemplateItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle'
	],
	
	models : ['Base.model.DiyTemplate'],
			
	stores : ['Base.store.DiyTemplate'],
	
	views : ['Base.view.diy_template.DiyTemplateItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_diy_template_item' : this.EntryPoint(),
			'base_diy_template_form' : this.FormEventHandler(),
			'base_diy_template_editor' : this.FormEventHandler()
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