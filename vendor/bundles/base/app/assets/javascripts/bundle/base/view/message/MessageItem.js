Ext.define('Base.view.message.MessageItem', {
	
	extend : 'Ext.tab.Panel',
	
	requires : [ 'Base.view.message.MessageForm'],
	
	mixins : { spotlink : 'Frx.mixin.view.SpotLink' },
	
	xtype : 'base_message_item',
	
	title : T('menu.Message'),
	
	items : [ 
		{ xtype : 'base_message_form' }
	]
});