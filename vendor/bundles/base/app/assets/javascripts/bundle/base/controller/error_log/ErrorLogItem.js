/**
 * ErrorLogDetail controller
 */
Ext.define('Base.controller.error_log.ErrorLogItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.ErrorLog', 
		'Base.store.ErrorLog', 
		'Base.view.error_log.ErrorLogItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle'
	],
	
	models : ['Base.model.ErrorLog'],
			
	stores : ['Base.store.ErrorLog'],
	
	views : ['Base.view.error_log.ErrorLogItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_error_log_item' : this.EntryPoint(),
			'base_error_log_form' : this.FormEventHandler()
		});
	}
	
});