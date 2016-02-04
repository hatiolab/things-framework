Ext.define('Base.view.dynamic_report.DynamicReport', {
	
	extend : 'Frx.common.ListView',
	
	requires : ['Base.view.dynamic_report.DynamicSearchForm'],
	
	xtype : 'base_dynamic_report',
	
	title : T('menu.DynamicReport'),
	
	store : 'Base.store.DynamicData',
	
	columns : [],

	dockedItems: [ {
		xtype : 'dynamicsearchform',
		items : []
	}, {
		xtype : 'controlbar',
		items : ['->', 'export']
	} ]
});