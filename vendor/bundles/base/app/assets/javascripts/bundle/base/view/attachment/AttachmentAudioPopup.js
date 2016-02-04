Ext.define('Base.view.attachment.AttachmentAudioPopup', {
	
	extend : 'Frx.common.Popup',
	
	xtype : 'base_attachment_audio_popup',
	
	title : T('label.ado'),
	
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	width : 400,
	
	height : 150,
	
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
				itemId : 'audiobox'
			} ]			
		} ]
	} ],
	
	initComponent : function() {
		this.callParent();
	},
	
	setRecord : function(record) {
		var path = record.data ? record.get("path") : record.path;
		var audioBox = this.down(' #audiobox');
		var html = "<audio controls='' preload='' autoplay='' loop=''><source src='";
		html += path;
		html += "' type='audio/mp3'/>Your browser does not support the video tag.</audio>";
		audioBox.getEl().setHTML(html);
		//var audio = audioBox.getEl().down('.audio').dom;
		//audio.play();
	},
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'close']
	} ]
});