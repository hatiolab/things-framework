Ext.define('Base.view.setting.Setting', {
	extend : 'Ext.form.Panel',

	xtype : 'base_setting',

	mixins : {
		spotlink : 'Frx.mixin.view.SpotLink'
	},
	
	title : T('title.setting'),

	dockedItems : {
		xtype : 'controlbar',
		items : [ '->', 'save', 'reset' ]
	},

	items : [ {
		xtype : 'container',
		layout : 'anchor',
		defaults : {
			anchor : '100%'
		},
		items : [ {
			xtype : 'container',
			layout : {
				align : 'stretch',
				type : 'hbox'
			},
			items : [ {
				xtype : 'textfield',
				fieldLabel : T('setting.setting-agent-url'),
				name : 'setting-agent-url',
				itemId : 'txtAgent'
			}, {
				xtype : 'button',
				text : T('button.test'),
				itemId : 'btnAgentTest'
			}/*, {
				xtype : 'checkbox',
				fieldLabel : '',
				inputValue : 'Y',
				unCheckedValue : 'N',
				boxLabel : T('setting.setting-keep-agent-url'),
				name : 'setting-keep-agent-url'
			}*/ ]
		}, {
			xtype : 'menuseparator'
		} ],
	}, {
		xtype : 'panel',
		layout: {
			type: 'table',
			columns: 2
		},
		cls : 'columnField column2',
		items: [ {
			xtype : 'checkbox',
			fieldLabel : 'Use Remote Server',
			name : 'setting-use_remote_server',
			colspan: 2
		}, {
			xtype : 'textfield',
			fieldLabel : 'Service Host',
			name : 'setting-rest_service_host'
		}, {
			xtype : 'textfield',
			fieldLabel : 'Basic Path',
			name : 'setting-basic_service_url'
		}, {
			xtype : 'textfield',
			fieldLabel : 'Export Path',
			name : 'setting-rest_export_path'
		}, {
			xtype : 'textfield',
			fieldLabel : 'Import Path',
			name : 'setting-rest_import_path'
		}, {
			xtype : 'textfield',
			fieldLabel : 'Attachment Upload Path',
			name : 'setting-attach_upload_path'
		}/*, {
			xtype : 'textfield',
			fieldLabel : 'Attachment Download Path',
			name : 'setting-attach_download_path'
		}*/ ]
	} ],

	initComponent : function() {
		this.callParent();
		
		Ext.Array.each(HF.custom.setting(), function(component) {
			try {
				this.add(component);
				this.add({
					xtype: 'menuseparator',
					cls : 'marginTB5'
				});
			} catch (e) {
				HF.error(T('error.CUSTOM-LOCAL-SETTING-FAILURE', {
					view : component
				}), e);
			}
		}, this);
	}
});