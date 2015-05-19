Ext.define('Base.view.diy_selection.DiySelectionTest', {
	
	extend : 'Ext.panel.Panel',
	
	xtype : 'base_diy_selection_test',
	
	title : T('title.test'),
	
	autoScroll : true,
	
	layout : {
		type : 'border'
	},
	
	items : [ {
		region : 'center',
		xtype : 'form',
		itemId : 'params',
		defaults : { xtype : 'textfield', anchor : '100%' },
		layout : { type : 'vbox', align : 'stretch' }
	} ],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'invoke']
	} ],
	
	setRecord : function(record) {
		var url = 'diy_selections/' + record.get('name') + '/query.json?test=y';
		var paramsView = this.child('#params');
		paramsView.removeAll();
		
		paramsView.add({
			xtype: 'fieldset',
			itemId : 'parameters',
			title: 'Parameters',
			defaultType: 'textfield',
			defaults: {
				anchor : '100%'
			}
		});
		
		var inParams = record.get('service_in_params');
		var paramsFieldSet = paramsView.child('#parameters');
		paramsFieldSet.add({
			xtype : 'textfield', 
			fieldLabel : 'Invoke URL', 
			value : url, 
			disabled : true 
		});
		
		Ext.Array.each(inParams, function(inParam) {
			paramsFieldSet.add({
				xtype : 'textfield', 
				name : 'input[' + inParam.name + ']', 
				fieldLabel : inParam.name 
			});
		});
	},
	
	showResult : function(outParams, dataList) {
		var fields = [], columns = [];
		
		Ext.Array.each(outParams, function(outParam) {
			fields.push(outParam.name);
			columns.push({dataIndex : outParam.name, header : T('label.' + outParam.name), flex : 1});
		});

		Ext.create('Frx.common.Popup', {
			title : 'Service Result',
			items : {
				xtype : 'gridpanel',
				itemId : 'result_grid',
				store : Ext.create('Ext.data.Store', {
					fields : fields,
					data : dataList
				}),
				columns : columns
			}
		}).show();
	}
});