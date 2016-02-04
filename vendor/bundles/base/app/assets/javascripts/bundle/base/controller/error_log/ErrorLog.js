/**
 * ErrorLog controller
 */
Ext.define('Base.controller.error_log.ErrorLog', {
	
	extend : 'Frx.controller.ListController',
	
	requires : [ 
		'Base.model.ErrorLog', 
		'Base.store.ErrorLog', 
		'Base.view.error_log.ErrorLog' 
	],
	
	models : ['Base.model.ErrorLog'],
			
	stores : ['Base.store.ErrorLog'],
	
	views : ['Base.view.error_log.ErrorLog'],
	
	refs : [ { ref : 'ErrorLog', selector : 'base_error_log' } ],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_error_log' : this.EntryPoint(),
			'base_error_log #goto_item' : {
				click : this.onGotoItem
			}
		});
	},
	
	/**
	 * override : grid reload전에 처리 할 것 처리
	 */
	beforeParamsChange : function(grid, params) {
		params = params ? params : {};
		if(!params['issue_date-gte']) {
			params['issue_date-gte'] = HF.getDate(-1);
		}
		if(!params['issue_date-lte']) {
			params['issue_date-lte'] = HF.getDate(0);
		}
		return params;
	}

});