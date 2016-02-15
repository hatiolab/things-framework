/**
 * Label controller
 */
Ext.define('Base.controller.label.Label', {
	
	extend : 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.Label', 
		'Base.store.Label', 
		'Base.view.label.Label' 
	],
	
	models : ['Base.model.Label'],
			
	stores : ['Base.store.Label'],
	
	views : ['Base.view.label.Label'],
		
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_label' : this.EntryPoint(),
			'base_label #goto_item' : {
				click : this.onGotoItem
			}
		});
	}

});