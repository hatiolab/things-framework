/**
 * AlarmDetail controller
 */
Ext.define('Base.controller.alarm.AlarmItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.Alarm', 
		'Base.store.Alarm', 
		'Base.view.alarm.AlarmItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle'
	],
	
	models : ['Base.model.Alarm'],
			
	stores : ['Base.store.Alarm'],
	
	views : ['Base.view.alarm.AlarmItem'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_alarm_item' : this.EntryPoint(),
			'base_alarm_form' : this.FormEventHandler(),
			'base_alarm_template_editor' : this.FormEventHandler(),
			'base_alarm_logic_editor' : this.FormEventHandler()
		});
	},
	
	/****************************************************************
	 ** 					여기는 customizing area 				   **
	 ****************************************************************/
	// Customized code here ...
	
	/****************************************************************
	 ** 					Override 구현 						   **
	 ****************************************************************/

	
	/****************************************************************
	 ** 					abstract method, 필수 구현 				   **
	****************************************************************/

});