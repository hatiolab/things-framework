Ext.define('Base.view.terminology.Terminology', {

	extend : 'Frx.common.ListView',

	xtype : 'base_terminology',

	title : T('menu.Terminology'),

	store : 'Base.store.Terminology',

	columns : [ {
		header: T('label.id'),
		dataIndex: 'id',
		hidden: true
	}, {
		xtype: 'codecolumn',
		commonCode: 'LOCALE',
		tpl: '{description}',
		header: T('label.locale'),
		width: 80,
		dataIndex: 'locale',
		editor: {
			xtype: 'codecombo',
			commonCode: 'LOCALE'
		}
	}, {
		xtype: 'codecolumn',
		commonCode: 'TERMS_CATEGORY',
		tpl: '{description}',
		header: T('label.category'),
		width: 80,
		dataIndex: 'category',
		editor: {
			xtype: 'codecombo',
			commonCode: 'TERMS_CATEGORY'
		}
	}, {
		header: T('label.name'),
		width: 200,
		dataIndex: 'name',
		editor: {
			xtype: 'textfield'
		}
	}, {
		header: T('label.display'),
		width: 250,
		dataIndex: 'display',
		editor: {
			xtype: 'textfield'
		}
	}, {
		header: T('label.updater'),
		dataIndex: 'updater',
		xtype: 'entitycolumn'
	}, {
		header: T('label.updated_at'),
		width: 130,
		dataIndex: 'updated_at',
		xtype: 'datecolumn',
		readOnly: true,
		format: T('format.datetime')
	} ],

	dockedItems: [ {
		xtype: 'searchform',
		items: [ {
			fieldLabel: T('label.category'),
			name: 'category-eq',
			xtype: 'codesearchcombo',
			commonCode: 'TERMS_CATEGORY'
		}, {
			fieldLabel: T('label.locale'),
			name: 'locale-eq',
			xtype: 'codesearchcombo',
			commonCode: 'LOCALE'
		}, {
			fieldLabel: T('label.name'),
			name: 'name-like'
		}, {
			fieldLabel: T('label.display'),
			name: 'display-like'
		}, {
			fieldLabel: 'Application',
			name: 'description-eq'
		} ]
	}, {
		xtype: 'controlbar',
		items: ['->', 'import', 'export', 'add', 'save', 'delete']
	} ]
});
