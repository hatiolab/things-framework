Ext.define('Base.view.error_log.ErrorLogItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 'Base.view.error_log.ErrorLogForm'],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_error_log_item',
	
	title : T('menu.ErrorLog'),
	
	items : [ 
		{ xtype : 'base_error_log_form' }
	]
});