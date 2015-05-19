Ext.define('Base.view.error_log.ErrorLog', {
	
	extend : 'Frx.common.ListView',
	
	xtype : 'base_error_log',
	
	title : T('menu.ErrorLog'),
	
	store : 'Base.store.ErrorLog',
	
	columns : [
		{ header : T('label.id'), dataIndex : 'id', hidden : true },
		{ header : T('label.date'), dataIndex : 'issue_date', xtype : 'datecolumn', format : T('format.date'), width : 80 },
		{ header : T('label.status'), dataIndex : 'status', width : 80 },
		{ header : T('label.type'), dataIndex : 'error_type', width : 150 },
		{ header : T('label.url'), dataIndex : 'uri', width : 150 },
		{ header : T('label.message'), dataIndex : 'message', flex : 1 },
		{ header : T('label.created_at'), dataIndex : 'created_at', xtype : 'datecolumn', format : T('format.datetime'), width : 130 },
	],	
	
	dockedItems : [ {
		xtype : 'searchform',
		items : [ { 
			xtype : 'daterange', 
			fieldLabel : T('label.date'), 
			name : 'issue_date' 
		}, { 
			fieldLabel : T('label.status'), 
			name : 'status-like' 
		}, { 
			fieldLabel : T('label.type'), 
			name : 'error_type-like' 
		}, { 
			fieldLabel : T('label.url'), 
			name : 'uri-like' 
		}, { 
			fieldLabel : T('label.message'), 
			name : 'message-like' 
		} ]
	}, {
		xtype : 'controlbar',
		items : ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});