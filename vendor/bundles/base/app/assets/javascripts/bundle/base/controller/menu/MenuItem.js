Ext.define('Base.controller.menu.MenuItem', {
	
	extend: 'Frx.controller.ItemController',
	
	mixins : [
		'Frx.mixin.lifecycle.ListLifeCycle'
	],
	
	requires : [ 
		'Base.model.Menu', 
		'Base.store.SubMenu', 
		'Base.view.menu.MenuItem',
		'Base.view.menu.MenuItemParam'
	],
	
	models : ['Base.model.Menu', 'Base.model.MenuParam'],
			
	stores: ['Base.store.SubMenu', 'Base.store.MenuParam'],
	
	views : ['Base.view.menu.MenuItem', 'Base.view.menu.MenuItemParam'],
	
	init: function() {
		this.callParent(arguments);
		
		this.control({
			'base_menu_item' : this.EntryPointWith(
				this.ListEventHandler()
			),
			'base_menu_item #goto_item' : {
				click : this.onGotoItem
			},
			'base_menu_item_param' : this.EntryPointWith(
				this.ListEventHandler({
					paramschange : this.onMenuParamParamsChange,
					click_list : this.onMenuParamClickList,
					click_save : this.onListClickSave
				})
			),
		});
	},
	
	onGotoItem : function(grid, td, rowIndex, colIndex, event, record, tr) {
		HF.show('Base.view.menu.MenuItemParam', record.data);
	},
	
	/**
	 * save item data modified on the view
	 * 
	 * @view
	 * @params
	 */
	loadItem : function(view, params) {
		var store = view.getStore();
		store.load({
			params : {
				"parent_id-eq" : params.id,
				"menu_type-noteq" : 'MENU'
			},
			callback : function(records, operation, success) {
				if(success) {
					view.fireEvent('after_load_list', view, records, operation);
				}
			}
		});
	},
	
	/**
	 * multiple update url을 리턴 
	 */
	getUpdateListUrl : function(grid) {
		if(grid.xtype == 'base_menu_item') {
			return 'menus/update_multiple.json';
		} else if(grid.xtype == 'base_menu_item_param') {
			var menuId = HF.current.view().getParams().id;
			return 'menus/' + menuId + '/update_multiple_menu_params.json';
		}
	},

	/**
	 * after grid updated
	 */
	onAfterUpdateList : function(grid, updateType, response) {
		grid.getStore().reload();
	},	
	
	/**
	 * 모델 생성
	 *
	 * @grid
	 */
	newRecord : function(grid) {
		var gridModel = grid.getStore().model;
		var modelName = gridModel.getName();
		
		if(modelName == 'Base.model.Menu') {
			return Ext.create(modelName, {
				parent_id : grid.getParams().id,
				menu_type : 'SCREEN',
				rank : 1
			});
		} else if(modelName == 'Base.model.MenuParam') {
			return Ext.create(modelName, {
				menu_id : grid.getParams().id
			});
		}
	},

	/**
	 * Menu Params Changed
	 */
	onMenuParamParamsChange : function(view, params) {
		this.loadMenuParamList(view, params);
	},
	
	/**
	 * Load Menu Params List
	 */
	loadMenuParamList : function(view, params) {
		view.itemname = params.name;
		App.getApplication().fireEvent('titlechange', view);
		var store = view.getStore();
		store.getProxy().url = 'menus/' + params.id + '/menu_params';
		store.load();
	},
	
	/**
	 * click list button on Menu Param Screen
	 *
	 * @view
	 */
	onMenuParamClickList : function(view) {
		HF.history.back();
	}
});