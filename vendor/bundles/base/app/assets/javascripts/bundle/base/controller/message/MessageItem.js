/**
 * MessageDetail controller
 */
Ext.define('Base.controller.message.MessageItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.Message', 
		'Base.store.Message', 
		'Base.view.message.MessageItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle'
	],
	
	models : ['Base.model.Message'],
			
	stores : ['Base.store.Message'],
	
	views : ['Base.view.message.MessageItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_message_item' : this.EntryPoint(),
			'base_message_form' : this.FormEventHandler()
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