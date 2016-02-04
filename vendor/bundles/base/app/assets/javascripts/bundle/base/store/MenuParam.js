Ext.define('Base.store.MenuParam', {
	
	extend : 'Ext.data.Store',
	
	model : 'Base.model.MenuParam',
	
	autoLoad : false,
	
	remoteFilter : false,
	
	remoteSort : false,
	
	proxy: {
		type: 'rest',
		url : 'menus/menu_params',
		format : 'json',
		reader: {
			type: 'json',
			root: 'items'
		},
		writer: {
			type: 'json'
		}
	}
	
});