Ext.define('Base.view.property.PropertyForm', {
	
	extend : 'Ext.form.Panel',
	
	xtype : 'base_property_form',
		
	title : T('title.properties'),

	onType : null,

	mixins : {
		form_life_cycle : 'Frx.mixin.lifecycle.FormLifeCycle'
	},

	layout : {
		type : 'vbox',
		align : 'stretch'
	},
	
	items: [
		{
			xtype : 'propertygrid',
			nameField : 'name',
			valueField : 'value',
			flex : 1
		}
	],
	
	dockedItems: [ {
		xtype: 'controlbar',
		items: ['->', 'list', 'add', 'save']
	} ],
	
	/**
	 * TODO Property Form이 클릭되어서 렌더링이 완료된 후 상위 View로 부터 onType, onId를 얻어서 Properties를 서버에 요청하도록 수정 ...
	 */
	initComponent : function() {
		this.callParent();
		var me = this;

		this.on(this.FormEventHandler({
			click_add : me.onAddClick
		}));
	},

	onAddClick : function(view) {
		var record = view.form._record;
		Ext.Msg.prompt('Add Property', 'Please Input Property Name To Add', function(ok, propName) {
			if(ok == 'ok' && propName) {
				var grid = this.down('propertygrid');
				var newRecord = Ext.create(grid.getStore().model);
				newRecord.set('on_type', this.onType);
				newRecord.set('on_id', record.get('on_id'));
				newRecord.set('name', propName);
				grid.store.insert(0, newRecord);
			}
		}, this);
	},

	/**
	 * save item data modified on the view
	 * 
	 * @view
	 */
	saveItem : function(view) {
		HF.msg.confirm({
			msg : T('text.Sure to Save'),
			fn : function(btn) {
				if(btn == 'yes') {
					var record = this.getItemRecord(view);
					var props = record.get('properties_attributes');
					if(props.length > 0) {
						for(var i = 0 ; i < props.length ; i++) {
							var prop = props[i];
							prop['on_type'] = this.onType;
							prop['on_id'] = record.get('id');
							prop['cud_flag_'] = 'c';
						}
					}
					
				    Ext.Ajax.request({
						url : 'properties/replace',
						method : 'POST',
						jsonData : props,
						scope : this,
						success : function(response) {
							var grid = this.down('propertygrid');
							grid.fireEvent('after_update_list', grid, 'u', response);
						}
					});
				}
			},
			scope: this
		});
	},	
		
	getItemRecord : function(view) {
		var record = this.mixins.form_life_cycle.getItemRecord(view);
		
		var grid = this.down('propertygrid');
		var attrs = record.get('properties_attributes');
		Ext.Object.each(grid.getSource(), function(k, v) {
			var a = Ext.Array.findBy(attrs, function(attr) {
				return attr.name === k;
			});
			
			if(a) {
				a.value = v;
			} else {
				attrs.push({
					name : k,
					value : v
				});
			}
		});
		
		return record;
	},
	
	onAfterLoadItem : function(view, record, operation) {
		this.mixins.form_life_cycle.onAfterLoadItem(view, record, operation);
		var url = 'properties/' + this.onType + '/' + record.get('id');

		Ext.Ajax.request({
			url : url,
			method : 'GET',
			scope : this,
			success : function(response) {
				var grid = this.down('propertygrid');
				var props = Ext.JSON.decode(response.responseText);
				var source = {};
				Ext.Array.each(props, function(prop) { source[prop.name] = prop.value });
				grid.setSource(source);
			}
		});
	}

});