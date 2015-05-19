Ext.define('Base.view.dynamic_report.DynamicSearchForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'dynamicsearchform',
	
	dock : 'top',
	
	cls : 'searchForm',
	
	autoScroll : true,
	
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
		
	rbar : { 
		xtype : 'controlbar', 
		width : 75,
		layout : {
			type : 'hbox',
			align : 'middle'
		},
		padding : '0 3 0 3',
		items : ['search','reset'] 
	},
	
	initComponent : function() {
		this.callParent();
	}

});