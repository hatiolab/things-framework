Ext.define('Base.view.alarm.AlarmLogicEditor', {
	extend : 'Ext.form.Panel',

	xtype : 'base_alarm_logic_editor',
	
	title : T('label.logic'),
	
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	autoScroll : true,
	
	items : [ {
		xtype : 'component',
		itemId : 'editor',
		flex : 1,
		tpl : '<div>{logic}</div>'
	}, {
		xtype : 'hidden',
		name : 'id'
	}, {
		xtype : 'hidden',
		name : 'logic'
	} ],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'save', 'delete']
	} ],

	initComponent : function() {
		this.callParent();
		
		var self = this;

		this.down('component#editor').on('afterrender', function(comp) {
			var id = comp.getEl().id;
		    comp.editor = ace.edit(id);
		    comp.editor.setTheme("ace/theme/xcode");
		    comp.editor.getSession().setMode("ace/mode/ruby");
			comp.editor.getSession().on('change', function(e) {
				self.down('hidden[name=logic]').setValue(comp.editor.getValue());
			});
		});
	},
	
	loadRecord : function(record) {
		this.callParent(arguments);
		
		var comp = this.down('component#editor');
		if(comp.editor) {
			// 화면이 액티브한 상태가 아니면, 잘 리프레쉬되지 않는 문제가 있다. 강제할 수 있는 방법이 필요.
			comp.editor.setValue(record.get('logic'));
			// Editor에 언어에 맞는 Editor를 설정한다.
			this.setEditorLanguage(record, comp.editor);
		} else {
			comp.update({
				logic : record.get('logic')
			});
		}
	},

	setEditorLanguage : function(record, editor) {
		if('ruby' == record.get('lang_type')) {
			editor.getSession().setMode("ace/mode/ruby");
		} else if('groovy' == record.get('lang_type')) {
			editor.getSession().setMode("ace/mode/groovy");
		} else {
			editor.getSession().setMode("ace/mode/javascript");
		}
	}

});
