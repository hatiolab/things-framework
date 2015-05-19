Ext.define('Base.view.attachment.AttachmentMoviePopup', {
	
	extend : 'Frx.common.Popup',
	
	xtype : 'base_attachment_movie_popup',
	
	title : T('label.movie'),
	
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	width : 850,
	
	height : 600,
	
	autoScroll : true,
	
	items : [ {
		xtype : 'panel',
		flex : 1,
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		items : [ {
			xtype : 'panel',
			flex : 1,
			layout : {
				type : 'vbox',
				align : 'stretch'
			},
			items : [ {
				xtype : 'box',
				itemId : 'fullscreen',
				html : '<div class="btnFullscreen"></div>'
			}, {
				xtype : 'box',
				flex : 1,
				itemId : 'videobox'
			} ]			
		} ]
	} ],
	
	initComponent : function() {
		this.callParent();
	},
	
	setRecord : function(record) {
		var path = record.data ? record.get("path") : record.path;
		var videoBox = this.down(' #videobox');
		var html = "<video class = 'video' width='800' height='480' controls='controls'><source src='";
		html += path;
		html += "' type='video/mp4' />Your browser does not support the video tag.</video>"
		videoBox.getEl().setHTML(html);
		var video = videoBox.getEl().down('.video').dom;
		video.play();
	},
		
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'close']
	} ]
});