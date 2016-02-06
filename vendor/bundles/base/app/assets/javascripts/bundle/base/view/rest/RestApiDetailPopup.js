Ext.define('Base.view.rest.RestApiDetailPopup', {
	
	extend : 'Frx.common.Popup',
	
	xtype : 'base_rest_api_detail_popup',
	
	title : 'API',
	
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	width : 600,
	
	height : 500,
	
	autoScroll : true,
	
	items : [ {
		xtype : 'tabpanel',
		autoScroll : true,
		items : [ {
			title : 'Common',
			xtype : 'form',
			itemId : 'infoform',
			defaults : { xtype : 'textfield', anchor : '100%' },
			items : [ { 
				name : 'id', hidden : true 
			}, { 
				name : 'name', fieldLabel : T('label.name')
			}, { 
				name : 'url', fieldLabel : T('label.url')
			}, { 
				name : 'http_method', fieldLabel : 'Method'
			}, { 
				name : 'description', fieldLabel : T('label.description')
			} ]
		}, {
			title : 'Input',
			xtype : 'grid',
			itemId : 'inputgrid',
			autoScroll : true,
			store : Ext.create('Ext.data.Store', {
				fields:['name', 'type'],
			}),
			columns : [ { 
				header : T('label.name'),
				dataIndex : 'name',
				flex : 1
			}, {
				header : T('label.type'),
				dataIndex : 'type',
				flex : 1
			} ]
		}, {
			title : 'Output',
			xtype : 'grid',
			itemId : 'outputgrid',
			autoScroll : true,
			store : Ext.create('Ext.data.Store', {
				fields:['name', 'type'],
			}),
			columns : [ { 
				header : T('label.name'),
				dataIndex : 'name',
				flex : 1
			}, {
				header : T('label.type'),
				dataIndex : 'type',
				flex : 1
			} ]
		}, {
			title : 'Test',
			xtype : 'form',
			itemId : 'testform',
			defaults : { xtype : 'textfield', anchor : '100%' },
			items : [ { 
				fieldLabel : T('label.url'),
				name : 'url'
			}, { 
				fieldLabel : 'Method',
				name : 'http_method'
			}, { 
				name : 'input_params', 
				fieldLabel : 'Input',
				xtype : 'textarea',
				rows : 9,
				value : '{\n}'
			}, { 
				name : 'output_params', 
				itemId : 'result',
				fieldLabel : 'Output',
				xtype : 'textarea',
				rows : 9				
			} ]
		} ]
	} ],
	
	setRecord : function(record, apiDetail) {
		this.down(' #infoform').loadRecord(record);
		this.down(' #testform').loadRecord(record);
		
		if(apiDetail.input_type_list) {
			this.down(' #inputgrid').store.loadRawData(apiDetail.input_type_list);
		} else {
			this.down(' #inputgrid').store.removeAll();
		}

		if(apiDetail.output_type_list) {
			this.down(' #outputgrid').store.loadRawData(apiDetail.output_type_list);
		} else {
			this.down(' #outputgrid').store.removeAll();
		}
	},

	setResult : function(output) {
		this.down(' #testform').down(' #result').setValue(output);
	},
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'invoke']
	} ]

});