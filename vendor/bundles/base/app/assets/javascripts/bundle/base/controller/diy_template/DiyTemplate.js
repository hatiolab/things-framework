/**
 * DiyTemplate controller
 */
Ext.define('Base.controller.diy_template.DiyTemplate', {
	
	extend : 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.DiyTemplate', 
		'Base.store.DiyTemplate', 
		'Base.view.diy_template.DiyTemplate' 
	],
	
	models : ['Base.model.DiyTemplate'],
			
	stores : ['Base.store.DiyTemplate'],
	
	views : ['Base.view.diy_template.DiyTemplate'],
		
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_diy_template' : this.EntryPoint(),
			'base_diy_template #goto_item' : {
				click : this.onGotoItem
			}
		});
	}

});