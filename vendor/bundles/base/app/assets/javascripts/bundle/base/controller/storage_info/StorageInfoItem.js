/**
 * StorageInfoDetail controller
 */
Ext.define('Base.controller.storage_info.StorageInfoItem', {
	
	extend : 'Frx.controller.ItemController',
	
	requires : [ 
		'Base.model.StorageInfo', 
		'Base.store.StorageInfo', 
		'Base.view.storage_info.StorageInfoItem'
	],
	
	mixins : [
		'Frx.mixin.lifecycle.FormLifeCycle',
		'Frx.mixin.lifecycle.ListLifeCycle'
	],
	
	models : ['Base.model.StorageInfo'],
			
	stores : ['Base.store.StorageInfo'],
	
	views : ['Base.view.storage_info.StorageInfoItem'],

    refs: [ { ref : 'FileView', selector : 'base_storage_info_files' } ],
	
    gridView : null,

	init : function() {
        this.callParent(arguments);

		this.control({
			'base_storage_info_item' : this.EntryPoint(),
			'base_storage_info_form' : this.FormEventHandler(),
            'base_storage_info_files': {
                click_show : this.showDataGrid,
                click_export: this.gridListExport,
                click_download: this.downloadFile,
                beforedestroy: this.beforeFileDestroy
            }
		});
	},

    /**
     * base_storage_info_files 뷰가 destroy 될 때 gridView도 null 처리 
     */
    beforeFileDestroy : function(fileView) {
        this.gridView = null;
    },
	
    /**
     * 그리드 표시 - 이미 표시되어 있다면 데이터만 새로 로딩 
     */
	showDataGrid : function() {
        if(this.gridView == null) {
            this.gridView = this.gridManager();
            this.gridView.initGrid();
        } else {
            this.loadGridData(this.gridView.getGrid(), this.gridView.getDataSet());
        }
	},

	getGridData : function(callback) {
		Ext.Ajax.request({
			url: 'attachments.json',
			method: 'GET',
			scope : this,
			success: function(response) {
				var data = Ext.JSON.decode(response.responseText);	
                callback(data.items);		
            }
		});
	},

    loadGridData : function(gridMain, dataSet) {
        this.getGridData(function(data) {
            new DataLudi.DataLoader(dataSet).load("json", data, {});
            gridMain.setDataSource(dataSet);
        });
    },

    gridManager: function() {
        var me = this;
        var dataSet = null;
        var grdMain = null;

        return {
            getDataSet: function() {
                return dataSet;
            },

            getGrid: function() {
                return grdMain;
            },
            
            initGrid: function() {
                var fields = [ {
                        fieldName: "id"
                    }, {
                        fieldName: "name"
                    }, {
                        fieldName: "mimetype"                        
                    }, {
                        fieldName: "file_size"
                    }, {
                        fieldName: "path"
                    }, {
                        fieldName: "tag"
                    }, {
                        fieldName: "created_at"
                    } ];

                dataSet = DataLudi.createGridDataSet();
                dataSet.setFields(fields);

                var columns = [{
                    "name": "id",
                    "fieldName": "id",
                    "width": "35",
                    "styles": {}
                }, {
                    "name": "Name",
                    "fieldName": "name",
                    "width": "135",
                    "styles": {}
                }, {
                    "name": "Mime Type",
                    "fieldName": "mimetype",
                    "width": "90",
                    "styles": {}
                }, {
                    "name": "File Size",
                    "fieldName": "file_size",
                    "width": "80",
                    "styles": {}
                }, {
                    "name": "File Path",
                    "fieldName": "path",
                    "width": "250",
                    "styles": {}
                }, {
                    "name": "createAt",
                    "fieldName": "created_at",
                    "width": "135",
                    "styles": {}
                }];
                
                grdMain = DataLudi.createGridView('grdMain', columns, '');
                grdMain.checkBar().setVisible(true);

                grdMain.header().head().setPopupMenu({
                    label: 'DataLudi Grid Version',
                    callback: function() {
                        HF.msg.alert({ title : 'Version', msg : DataLudi.getVersion() });
                    }
                });

                grdMain.onDataCellClicked = function(grid, index) {
                    // if (index && index.dataColumn() && index.getDataIndex(grid) >= 0) {
                    //     var v = dataSet.getValue(index.getDataIndex(grid), index.dataField());
                    //     Ext.Msg.alert('onDataCellClicked', v);
                    // }
                };

                grdMain.onColumnHeaderDblClicked = function(grid, column) {
                    HF.msg.alert({ title : 'onColumnHeaderDblClicked', msg : column.name() });
                };

                me.loadGridData(grdMain, dataSet);
            }
        };
    },

    /**
     * Dataludi Grid Export
     */
    gridListExport: function() {
        var grid = this.gridView.getGrid();

        new DataLudi.GridExcelExporter().export(grid, {
            target: "local",
            fileName: "attachments.xlsx",
            // rowIndicator: document.getElementById("chkIndicator")&&document.getElementById("chkIndicator").checked ? "default" : "hidden",
            // header: document.getElementById("chkIndicator")&&document.getElementById("chkHeader").checked ? "default" : "hidden",
            // footer: document.getElementById("chkIndicator")&&document.getElementById("chkFooter").checked ? "default" : "hidden",
            numberFormat: "#,##0.00",
            datetimeFormat: "yyyy.mm.dd"
        });
    },

    /**
     * Dataludi Download File
     */
    downloadFile : function(fileView) {
        var form = fileView.down('#downloadForm');
        var paramFiled = form.down('#formParam');
        paramFiled.setValue('1');
        form.submit();
    }

});