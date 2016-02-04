/**
 * DiyReport controller
 */
Ext.define('Base.controller.dynamic_report.DynamicReport', {
	
	extend: 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.DynamicData', 
		'Base.store.DynamicData', 
		'Base.view.dynamic_report.DynamicReport' 
	],
		
	models : ['Base.model.DynamicData'],
			
	stores : ['Base.store.DynamicData'],
	
	views : ['Base.view.dynamic_report.DynamicReport'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_dynamic_report' : this.EntryPoint(),
			'dynamicsearchform' : {
				click_search : this.onSearchClick,
				click_reset : this.onResetClick
			}
		});
	},
	
	/**
	 * Params Changed
	 * 1. get parameters 
	 * 2. find diy selection info
	 * 3. change search conditions by input parameters
	 * 4. change grid columns by output parameters
	 */
	onParamsChange : function(view, params) {
		var store = view.getStore();
		store.removeAll();
		var pagingtoolbar = view.down('pagingtoolbar');
		pagingtoolbar.hide();
		
		if(Ext.isEmpty(params) || Ext.isEmpty(params.id)) {
			return;
		}
		
		Ext.Ajax.request({
			url : 'menus/' + params.id + '/menu_params.json',
			method : 'GET',
			scope : this,
			success : function(response) {
				var menuParams = Ext.JSON.decode(response.responseText);
				var paramItems = menuParams.items;
				var diySelectionName = '';
				for(var i = 0 ; i < paramItems.length ; i++) {
					if(paramItems[i].name == "diySelection") {
						diySelectionName = paramItems[i].value;
						break;
					}
				}
			
				if(!Ext.isEmpty(diySelectionName)) {
					this.reconfigureView(diySelectionName);
				}
			}
		});
	},
	
	getDiySelection : function() {
		return this.diySelection;
	},
	
	setDiySelection : function(diySelection) {
		this.diySelection = diySelection;
	},
	
	/**
	 * find diy selection info and reconfigure view
	 */
	reconfigureView : function(selectionName) {
		var mainView = HF.current.view()
		mainView.itemname = selectionName;
		App.getApplication().fireEvent('titlechange', mainView);
		
		Ext.Ajax.request({
			url : 'diy_selections/show_by_name.json?name=' + selectionName,
			method : 'GET',
			scope : this,
			success : function(response) {
				var diySelection = Ext.JSON.decode(response.responseText);
				this.setDiySelection(diySelection);
				this.reconfigureSearchForm(diySelection);
				this.reconfigureGrid(diySelection);
			}
		});
	},
	
	/**
	 * reconfigure search form
	 */
	reconfigureSearchForm : function(diySelection) {
		var searchForm = HF.current.view().down(' dynamicsearchform');
		searchForm.removeAll(true);
		var inParams = diySelection.service_in_params;
		var paramCount = inParams.length;
		var row = null;
		
		for(var i = 0 ; i < paramCount ; i++) {
			if(i % 2 == 0) {
				row = this.createSearchFormRow();
				searchForm.add(row);
			}
			
			var searchItem = Ext.create('Ext.form.field.Text', {
				name : inParams[i].name,
				fieldLabel : inParams[i].description,
				flex : 1
			});
			row.add(searchItem);
		}
		
		if(paramCount % 2 == 1) {
			var emptyItem = Ext.create('Ext.container.Container', {
				flex : 1
			});
			row.add(emptyItem);
		}
	},
	
	createSearchFormRow : function() {
		return Ext.create('Ext.container.Container', {
			layout : {
				type : 'hbox',
				align : 'stretch'
			},
			defaults : {
				margin : 3,
				xtype : 'textfield'
			},
			items : []
		});		
	},
	
	/**
	 * reconfigure search grid
	 */
	reconfigureGrid : function(diySelection) {
		var outParams = diySelection.service_out_params;
		var columns = [];
		
		for(var i = 0 ; i < outParams.length ; i++) {
			columns.push({
				text : outParams[i].description,
				dataIndex : 'data_' + (i + 1),
				flex : 1
			})
		}
		
		var grid =  HF.current.view();
		var store = grid.getStore();
		grid.reconfigure(store, columns);
	},
	
	/**
	 * get report data
	 */
	getReportData : function(params) {
		var selectionName = this.getDiySelection().name;
		var grid =  HF.current.view();
		var store = grid.getStore();
		params.dynamic = 'Y';
		store.getProxy().url = 'diy_selections/' + selectionName + '/query';
		store.getProxy().extraParams = params;
		store.load();
	},
	
	onSearchClick : function(form) {
		var params = form.getValues();
		this.getReportData(params);
	},
	
	/**
	 * search form을 reset
	 */
	onResetClick : function(form) {
		form.getForm().reset();
	},
	
	/**
	 * export : 클라이언트에서는 검색 조건으로 요청만 하고 서버에서 데이터를 생성해서 엑셀로 내려줌 
	 */
	onListClickExport : function(grid) {
		var selectionName = this.getDiySelection().name;
		HF.exportScreen(grid, 'diy_selections/' + selectionName + '/export_screen.xlsx?dynamic=Y&filename=' + selectionName);
	}
});