/**
 * Chit controller
 */
Ext.define('Base.controller.chit.Chit', {

	extend: 'Frx.controller.ListController',

	mixins: {
		slideshow: 'Base.mixin.lifecycle.ListSlideShow'
	},

	requires: [
		'Base.model.Chit',
		'Base.store.Chit',
		'Base.view.chit.Chit'
	],

	models: ['Base.model.Chit'],

	stores: ['Base.store.Chit'],

	views: ['Base.view.chit.Chit'],

	refs: [{
		ref: 'Chit',
		selector: 'base_chit'
	}],

	init: function() {
		this.callParent(arguments);

		this.control({
			'base_chit': this.EntryPoint({
				click_invoke: this.onInvokeClick
			}),
			'base_chit #goto_item': {
				click: this.onGotoItem
			},
			'base_chit #slideshow': {
				click: this.onSlideShow
			}
		});
	},

	onInvokeClick: function(view) {
		/*Ext.Ajax.request({
			url : '/diy_templates/ExcelTemplate/template/excel',
			method: 'POST',
			success: function(response) {
				console.log(response.responseText);
			}
		});*/

        var url = 'http://localhost:9002/rest/diy_templates/ExcelTemplate/template/excel';
        HF.download(url);

        /*var method = 'POST';

        var form = Ext.create('Ext.form.Panel', {
            //standardSubmit: true,
            url: url,
            method: method,
			contentType: "application/json"
        });

        // Call the submit to begin the file download.
        form.submit({
            target: '_blank'
        });

        // Clean-up the form
        Ext.defer(function() {
            form.close();
        }, 100);*/
	}

});