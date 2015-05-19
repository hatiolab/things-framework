Ext.define('Base.controller.attachment.Attachment', {
	
	extend : 'Frx.controller.ListController',
	
	requires : ['Base.view.attachment.AttachmentMoviePopup'],
	
	mixins : { slideshow : 'Base.mixin.lifecycle.ListSlideShow' },
		
	models : ['Base.model.Attachment'],
	
	stores : ['Base.store.Attachment'],
	
	views : ['Base.view.attachment.Attachment'],
	
	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_attachment' : this.EntryPoint(),
			'base_attachment #goto_item' : {
				click : this.onGotoItem
			},
			'base_attachment #slideshow' : {
				click : this.onSlideShow
			},
			'base_attachment_movie_popup' : {
				paramschange : this.onPopupParamsChange,
				click_close : this.onPopupClose
			}
		});
	},
	
	onSlideShow : function(grid, item, rowIndex, colIndex, e, record) {
		var showData = record.data;
		if (showData.mimetype && showData.mimetype.indexOf('image') === 0) {
			HF.slideshow([record.data]);			
		} else if(showData.name && showData.name.indexOf('.mp4') > 0) {
			//HF.movieshow([record.data]);
			HF.popup('Base.view.attachment.AttachmentMoviePopup', record, {});
		}
	},
	
	onPopupParamsChange : function(view, params) {
		view.setRecord(params);
	},
	
	onPopupClose : function(popup) {
		popup.close();
	}
	
});