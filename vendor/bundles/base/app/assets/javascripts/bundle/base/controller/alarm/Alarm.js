/**
 * Alarm controller
 */
Ext.define('Base.controller.alarm.Alarm', {
	
	extend : 'Frx.controller.ListController',
	
	mixins : { slideshow : 'Base.mixin.lifecycle.ListSlideShow' },
	
	requires : [ 
		'Base.model.Alarm', 
		'Base.store.Alarm', 
		'Base.view.alarm.Alarm' 
	],
	
	models : ['Base.model.Alarm'],
			
	stores : ['Base.store.Alarm'],
	
	views : ['Base.view.alarm.Alarm'],
		
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_alarm' : this.EntryPoint(),
			'base_alarm #goto_item' : {
				click : this.onGotoItem
			},
			'base_alarm #slideshow' : {
				click : this.onSlideShow
			}
		});
	}

});