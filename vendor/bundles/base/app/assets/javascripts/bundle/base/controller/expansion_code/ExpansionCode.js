/**
 * ExpansionCode controller
 */
Ext.define('Base.controller.expansion_code.ExpansionCode', {
	
	extend : 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.ExpansionCode', 
		'Base.store.ExpansionCode', 
		'Base.view.expansion_code.ExpansionCode'
	],
	
	models : ['Base.model.ExpansionCode'],
			
	stores : ['Base.store.ExpansionCode'],
	
	views : ['Base.view.expansion_code.ExpansionCode'],
		
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_expansion_code' : this.EntryPoint(),
			'base_expansion_code #goto_item' : {
				click : this.onGotoItem
			}
		});
	}

});