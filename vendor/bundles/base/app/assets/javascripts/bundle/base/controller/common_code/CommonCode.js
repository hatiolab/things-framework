/**
 * CommonCode controller
 */
Ext.define('Base.controller.common_code.CommonCode', {
	
	extend: 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.CommonCode', 
		'Base.store.CommonCode', 
		'Base.view.common_code.CommonCode' 
	],
	
	models : ['Base.model.CommonCode'],
			
	stores: ['Base.store.CommonCode'],
	
	views : ['Base.view.common_code.CommonCode'],
	
	init: function() {
		this.callParent(arguments);
		
		this.control({
			'base_common_code' : this.EntryPoint(),
			'base_common_code #goto_item' : {
				click : this.onGotoItem
			}
		});
	},

	/**
	 * 기본적으로 항상 적용되어야 할 검색 조건 - Parent Code가 없는 즉 상위 코드만 검색 화면에 나와야 한다.
	 */
	getDefaultFilters : function() {
		return { 'parent_id-is_null' : '' };
	},

	/**
	 * 서버로 전달되서는 안 되는 값을 제거하거나 값을 선처리한다.
	 * 
	 * @data
	 */
	validateMultipleUpdateData : function(data) {
		Ext.Array.each(['items', 'creator', 'updater', 'creator_id', 'created_at', 'updater_id', 'updated_at'], function(key) {
			delete data[key];
		});

		return data;
	}	

});