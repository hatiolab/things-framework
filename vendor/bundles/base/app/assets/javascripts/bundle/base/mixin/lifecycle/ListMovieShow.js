Ext.define('Base.mixin.lifecycle.ListMovieShow', {

	/**
	 * 동영상 플레이어를 실행함
	 */
	onMovieShow : function(grid, item, rowIndex, colIndex, e, record) {
		var store = Ext.create('Base.store.Attachment');
		store.load({
			params : {
				'_q[on_type-eq]' : HF.classify(HF.current.resource().type),
				'_q[on_id-eq]' : record.get('id'),
				'_q[tag-eq]' : 'attachment'
			},
			callback : function(records, operation, success) {
				if(success) {
					// TODO 추후 스타일에서 지원하면 구현
					/*HF.movieshow(Ext.Array.map(records, function(record) {
						return record.data;
					}));*/
					HF.popup('Base.view.attachment.MoviePlayerPopup', records[0], {});
				}
			}
		})
	}

});




