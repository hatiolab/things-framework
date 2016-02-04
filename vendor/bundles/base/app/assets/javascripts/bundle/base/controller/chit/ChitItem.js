/**
 * ChitDetail controller
 */
Ext.define('Base.controller.chit.ChitItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.Chit', 
		'Base.store.Chit', 
		'Base.view.chit.ChitItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle',
		'Frx.mixin.lifecycle.ListLifeCycle'
	],
	
	models : ['Base.model.Chit'],
			
	stores : ['Base.store.Chit'],
	
	views : ['Base.view.chit.ChitItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_chit_item' : this.EntryPoint(),
			'base_chit_form' : this.FormEventHandler(),
			'base_chit_logic' : this.FormEventHandler()
			// this.ListEventHandler({
			// 	after_load_item : this.onLoadItem
			// })
		});
	},
	
	/****************************************************************
	 ** 					Override 구현 						   **
	 ****************************************************************/
	onLoadItem : function(view, record, operation) {

	}
	
	/****************************************************************
	 ** 					abstract method, 필수 구현 				   **
	****************************************************************/

});