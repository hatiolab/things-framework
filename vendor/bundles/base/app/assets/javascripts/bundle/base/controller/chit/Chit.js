/**
 * Chit controller
 */
Ext.define('Base.controller.chit.Chit', {
	
	extend : 'Frx.controller.ListController',
	
	mixins : { slideshow : 'Base.mixin.lifecycle.ListSlideShow' },
	
	requires : [ 
		'Base.model.Chit', 
		'Base.store.Chit', 
		'Base.view.chit.Chit' 
	],
	
	models : ['Base.model.Chit'],
			
	stores : ['Base.store.Chit'],
	
	views : ['Base.view.chit.Chit'],
	
	refs : [ { ref : 'Chit', selector : 'base_chit' } ],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_chit' : this.EntryPoint(),
			'base_chit #goto_item' : {
				click : this.onGotoItem
			},
			'base_chit #slideshow' : {
				click : this.onSlideShow
			}
		});
	}

});