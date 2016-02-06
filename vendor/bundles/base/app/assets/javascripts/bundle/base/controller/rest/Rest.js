/**
 * Rest controller
 */
Ext.define('Base.controller.rest.Rest', {
	
	extend : 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.Rest', 
		'Base.store.Rest', 
		'Base.view.rest.Rest' 
	],
	
	models : ['Base.model.Rest'],
			
	stores : ['Base.store.Rest'],
	
	views : ['Base.view.rest.Rest'],
		
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_rest' : this.EntryPoint(),
			'base_rest #goto_item' : {
				click : this.onGotoItem
			}
		});
	}

});