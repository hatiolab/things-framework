/**
 * CodeExpansion controller
 */
Ext.define('Base.controller.code_expansion.CodeExpansion', {
	
	extend : 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.CodeExpansion', 
		'Base.store.CodeExpansion', 
		'Base.view.code_expansion.CodeExpansion' 
	],
	
	models : ['Base.model.CodeExpansion'],
			
	stores : ['Base.store.CodeExpansion'],
	
	views : ['Base.view.code_expansion.CodeExpansion'],
		
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_code_expansion' : this.EntryPoint(),
			'base_code_expansion #goto_item' : {
				click : this.onGotoItem
			}
		});
	}

});