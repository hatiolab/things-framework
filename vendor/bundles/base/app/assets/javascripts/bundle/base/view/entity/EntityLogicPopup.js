Ext.define('Base.view.entity.EntityLogicPopup', {
	
	extend : 'Frx.common.Popup',
	
	xtype : 'base_entity_logic_popup',
	
	title : T('label.logic'),
	
	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	width : 900,
	
	height : 500,
	
	autoScroll : true,
	
	items : [ {
		xtype : 'form',
		flex : 1,
		layout : {
			type : 'vbox',
			align : 'stretch'
		},
		defaults : { xtype : 'textfield', anchor : '100%' },
		items : [ {
			name : 'name',
			fieldLabel : T('label.name'),
			readOnly : true
		}, {
			name : 'description',
			fieldLabel : T('label.description'),
			readOnly : true
		}, {
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
		} ]
	} ],
	
	initComponent : function() {
		this.callParent();
		
		var self = this;
		this.down('component#editor').on('afterrender', function(comp) {
			var id = comp.getEl().id;
		    comp.editor = ace.edit(id);
		    comp.editor.setTheme("ace/theme/textmate");
		    comp.editor.getSession().setMode("ace/mode/ruby");
			comp.editor.getSession().on('change', function(e) {
				self.down(' hidden[name=logic]').setValue(comp.editor.getValue());
			});
		});
	},
	
	setRecord : function(record) {
		this.down('form').getForm().loadRecord(record);
		var comp = this.down(' component#editor');
		if(comp.editor) {
			comp.editor.setValue(record.get('logic'))
		} else {
			comp.update({
				logic : record.get('logic')
			});
		}
	},
		
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'save', 'close']
	} ]
});