/**
 * DiyForm controller
 */
Ext.define('Base.controller.diy_form.DiyForm', {
	
	extend : 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.DiyForm', 
		'Base.store.DiyForm', 
		'Base.view.diy_form.DiyForm' 
	],
	
	models : ['Base.model.DiyForm'],
			
	stores : ['Base.store.DiyForm'],
	
	views : ['Base.view.diy_form.DiyForm'],
		
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_diy_form' : this.EntryPoint(),
			'base_diy_form #goto_item' : {
				click : this.onGotoItem
			}
		});
	}

});