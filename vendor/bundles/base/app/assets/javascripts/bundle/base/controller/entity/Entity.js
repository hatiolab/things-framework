/**
 * Entity controller
 */
Ext.define('Base.controller.entity.Entity', {

	extend: 'Frx.controller.ListController',
		
	requires : [ 
		'Base.model.Entity', 
		'Base.store.Entity', 
		'Base.view.entity.Entity' 
	],

	models : ['Base.model.Entity'],

	stores: ['Base.store.Entity'],

	views : ['Base.view.entity.Entity'],

	init: function() {
		this.callParent(arguments);

		this.control({
			'base_entity' : this.EntryPoint(),
			'base_entity #goto_item' : {
				click : this.onGotoItem
			}
		});
	},

	/**
	 * override : 서버로 전달되서는 안 되는 값을 제거하거나 값을 선처리한다.
	 */
	validateMultipleUpdateData : function(data) {
		this.callParent(arguments);
		delete data['entity_columns'];
		delete data['list_infographic'];
		delete data['item_infographic'];
		return data;
	}

});