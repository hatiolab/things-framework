/**
 * StorageInfoDetail controller
 */
Ext.define('Base.controller.storage_info.StorageInfoItem', {

    extend: 'Frx.controller.ItemController',

    requires: [
        'Base.model.StorageInfo',
        'Base.store.StorageInfo',
        'Base.view.storage_info.StorageInfoItem'
    ],

    mixins: [
        'Frx.mixin.lifecycle.FormLifeCycle',
        'Frx.mixin.lifecycle.ListLifeCycle'
    ],

    models: ['Base.model.StorageInfo'],

    stores: ['Base.store.StorageInfo'],

    views: ['Base.view.storage_info.StorageInfoItem'],

    refs: [{
        ref: 'FileView',
        selector: 'base_storage_info_files'
    }],

    gridView: null,

    init: function() {
        this.callParent(arguments);

        this.control({
            'base_storage_info_item': this.EntryPoint(),
            'base_storage_info_form': this.FormEventHandler(),
            'base_storage_info_files': {
                click_show: this.showDataGrid,
                click_export: this.gridListExport,
                click_download: this.downloadFile,
                click_add: this.insertRows,
                click_update: this.updateRows,
                click_delete: this.deleteRows,
                click_save: this.save,
                beforedestroy: this.beforeFileDestroy
            }
        });
    },

    /**
     * base_storage_info_files 뷰가 destroy 될 때 gridView도 null 처리 
     */
    beforeFileDestroy: function(fileView) {
        this.gridView = null;
    },
    /**
     * 그리드 화면 데이터 추가
     */
    insertRows: function() {
        var dataSet = this.gridView.getDataSet();
        var gridMain = this.gridView.getGrid();
        var row = Math.max(gridMain.focusedDataIndex(), 0);
        dataSet.insertRow(row, {});
    },

    /**
     * 그리드 화면 데이터 삭제 
     */
    deleteRows: function() {
        var gridMain = this.gridView.getGrid();
        var rows = gridMain.getCheckedRows();
        console.log(rows);
        gridMain.deleteRows(rows, true);
    },

    /**
     * 그리드 데이터  디비 저장
     */
    save: function() {
        console.log('save');
        var dataSet = this.gridView.getDataSet();
        var data = [];

        var inserted = dataSet.getStateRows('created');
        for (var i = 0; i < inserted.length; i++) {
            console.log(inserted[i]);
            var object = dataSet.getRowObject(inserted[i]);
            object.cud_flag_ = 'c';
            data.push(object);
        }

        var updated = dataSet.getStateRows('updated');
        for (var i = 0; i < updated.length; i++) {
            console.log(updated[i]);
            var object = dataSet.getRowObject(updated[i]);
            object.cud_flag_ = 'u';
            data.push(object);
        }
        console.log(data);

        var deleted = dataSet.getStateRows('deleted');
        for (var i = 0; i < deleted.length; i++) {
            console.log(deleted[i]);
            var object = dataSet.getRowObject(deleted[i]);
            object.cud_flag_ = 'd';
            data.push(object);
        }
        this.updateStorageinfo(data);
    },
    /**
     * 그리드 표시 - 이미 표시되어 있다면 데이터만 새로 로딩 
     */
    showDataGrid: function() {
        if (this.gridView == null) {
            this.gridView = this.gridManager();
            this.gridView.initGrid();
        } else {
            this.loadGridData(this.gridView.getGrid(), this.gridView.getDataSet());
        }
    },

    /**
     * 데이타 베이스 변경
     */
    updateStorageinfo: function(data) {
        data = JSON.stringify(data);
        // data = JSON.parse(data);
        Ext.Ajax.request({
            url: 'attachments/update_multiple',
            method: 'POST',
            headers: {'Content-Type' : 'application/json' },
            // scope: this,
            params: data,
            success: function(response) {
                console.log(response);
            },
            error: function(xhr, status, error) {
                var err = status + ', ' + error;
                alert("ajax() Failed: " + err);
            }
        });
    },
    /**
     * 
     */
    deleteStorageInfo : function() {
        // this.debug(arguments);
        // storage_infos/delete_file/
        
    },
    /**
     * 데이타 List받아서 콜백으로 반환
     */
    getGridData: function(callback) {
        Ext.Ajax.request({
            url: 'attachments.json',
            method: 'GET',
            scope: this,
            success: function(response) {
                var data = Ext.JSON.decode(response.responseText);
                callback(data.items);
            },
            error: function(xhr, status, error) {
                var err = status + ', ' + error;
                alert("ajax() Failed: " + err);
            }
        });
    },

    /**
     * 그리드 DataSet 재설정
     */
    loadGridData: function(gridMain, dataSet) {
        this.getGridData(function(data) {
            new DataLudi.DataLoader(dataSet).load("json", data, {});
            gridMain.setDataSource(dataSet);
            gridMain.setRowIndicator({
                    stateVisible: true
                })
                .setEditOptions({
                    insertable: true,
                    appendable: true,
                    deletable: true,
                    softDelete: true
                });
        });
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
    downloadFile: function(fileView) {
        var rows = this.gridView.getGrid().getCheckedRows();
        var data = [];
        // console.log(rows[0]);
        for (var i = 0; i < rows.length; i++) {
            var rowData = rows[i].getRowObject();
            var url = 'http://192.168.35.155:9002/rest/download'+'/'+rowData.id,
                method = 'GET', 
                params = {};

            var form = Ext.create('Ext.form.Panel', {
                standardSubmit: true,
                url: url,
                method: method
            });

            // Call the submit to begin the file download.
            form.submit({
                target: '_blank', // Avoids leaving the page. 
                params: params
            });

            // Clean-up the form
            Ext.defer(function() {
                form.close();
            }, 100);
        }

    },

    /**
     * 그리드 객채성성 및 칼럼 초기화
     */
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
                var fields = [{
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
                }, {
                    fieldName: "cud_flag_"
                }];

                dataSet = DataLudi.createGridDataSet();
                dataSet.setFields(fields);
                dataSet.setCheckStates(true);
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

                var contextMenu = grdMain.setContextMenu([{
                    label: "Add Row",
                    callback: function() {
                        grdMain.insert();
                        grdMain.setFocus();
                    }
                }, {
                    label: "Delete Rows",
                    callback: function() {
                        // grdMain.deleteSelection();
                        var row = grdMain.focusedRow();
                        if (row && row.dataIndex() >= 0) {
                            // dataSet.deleteRow(row.dataIndex());
                            if (dataSet.getRowState(row.dataIndex()) == 'created') {
                                dataSet.setRowState(row.dataIndex(), 'createAndDeleted');
                            } else {
                                dataSet.setRowState(row.dataIndex(), 'deleted');
                            }
                        }
                    }
                }, {
                    label: "-" // menu separator
                }, {
                    label: "Excel Export",
                    callback: function() {
                        me.gridListExport()
                    },
                }]);

                grdMain.header().head().setPopupMenu({
                    label: 'DataLudi Grid Version',
                    button: 'add',
                    callback: function() {
                        HF.msg.alert({
                            title: 'Version',
                            msg: DataLudi.getVersion()
                        });
                    }
                });

                grdMain.onDataCellClicked = function(grid, index) {
                    // if (index && index.dataColumn() && index.getDataIndex(grid) >= 0) {
                    //     var v = dataSet.getValue(index.getDataIndex(grid), index.dataField());
                    //     Ext.Msg.alert('onDataCellClicked', v);
                    // }
                };

                grdMain.onColumnHeaderDblClicked = function(grid, column) {
                    HF.msg.alert({
                        title: 'onColumnHeaderDblClicked',
                        msg: column.name()
                    });
                };

                me.loadGridData(grdMain, dataSet);
            }
        };
    }

});