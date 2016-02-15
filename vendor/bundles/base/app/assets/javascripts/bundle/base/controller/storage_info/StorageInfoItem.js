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
	
    gridMode : 'canvas',

	// gridView : DataLudi.createGridView('grdMain', null, gridMode == 'dom' ? '$_html_test_' : '');
	gridVw : null,


	init : function() {
		this.callParent(arguments);
		
		this.control({
			'base_storage_info_item' : this.EntryPoint(),
			'base_storage_info_form' : this.FormEventHandler(),
            'base_storage_info_files': {
                click_show : this.onAfterLoadItemForFiles
            }
		});
	},
	
	onAfterLoadItemForFiles : function() {
        var grd = DataLudi.createGridView('indexGrd', []);
        // var grid = new DataLudi.GridComponent(null, 'indexGrd').gridView();
		// var columnName = {
		// 	ProductId: "제품코드",
		// 	ProductName: "제품명",
		// 	CustomerId: "고객아이디",
		// 	CustomerName: "고객명",
		// 	Country: "국가",
		// 	Phone: "전화번호",
		// 	Unit: "단위",
		// 	Currency: "통화",
		// 	UnitPrice: "단가",
		// 	Quantity: "수량",
		// 	OrderDate: "발주일",
		// 	ShipDate: "선적일",
		// 	Sum: "합계"
		// };

  //       this.gridVw = this.gridManager(columnName);
  //       this.gridVw.initGrid();
	},

	gridListExport: function() {
        var grid = gridView.getGrid();

        new DataLudi.GridExcelExporter().export(grid, {
            target: "local",
            fileName: "dlgrid.xlsx",
            // rowIndicator: document.getElementById("chkIndicator")&&document.getElementById("chkIndicator").checked ? "default" : "hidden",
            // header: document.getElementById("chkIndicator")&&document.getElementById("chkHeader").checked ? "default" : "hidden",
            // footer: document.getElementById("chkIndicator")&&document.getElementById("chkFooter").checked ? "default" : "hidden",
            numberFormat: "#,##0.00",
            datetimeFormat: "yyyy.mm.dd"
        });
    },

	// setGridData : function(dataSet){

	// 	// Ext.Ajax.request({
	// 	// 	url: 'attachments.json',
	// 	// 	method: 'GET',
	// 	// 	scope : this,
	// 	// 	success: function(response) {
	// 	// 		var data = Ext.JSON.decode(response.responseText);
	// 	// 		new DataLudi.DataLoader(dataSet).load("json", data, {});
	// 	// 	}
	// 	// 	//TODO : Failure control
	// 	// 	// ,
	// 	// 	// failure : function(response){

	// 	// 	// }
	// 	// });
	// },

    setGridData: function(ds) {
        var data = "product_id,product_name,customer_id,customer_name,country,phone,unit,currency,unit_price,quantity,order_date,ship_date\n";
        data += "primis,mattis,curabitur,nunc purus,Venezuela,6-(330)118-1978,amet,VEF,738.94,534,2015/05/30,2014-12-01T19:50:22Z\n";
        data += "sapien,pede,diam,posuere,Iceland,5-(824)596-5295,at,ISK,333.25,853,2015/07/18,2014-09-23T23:09:01Z\n";
        data += "vivamus,vestibulum ante,cum,etiam justo,Panama,0-(465)962-4766,vulputate,PAB,446.14,407,2015/06/11,2015-03-29T10:20:22Z";

        var jsonData = this.csvJSON(data);
        console.log(jsonData);
        return new DataLudi.DataLoader(ds).load("json", jsonData, {});
    },

    csvJSON: function(csv) {

        var lines = csv.split("\n");

        var result = [];

        var headers = lines[0].split(",");

        for (var i = 1; i < lines.length; i++) {

            var obj = {};
            var currentline = lines[i].split(",");

            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
            }

            result.push(obj);

        }

        return result; //JavaScript object
        // return JSON.stringify(result); //JSON
    },

	getJsonFields : function (jsonObject) {
		//TODO : Generate Dataludi Field Object by auto
	},

    gridManager: function(columnName) {
        var me = this;
        var view;
        var dsMain;
        var grdMain;
        return {
            getDataSet: function() {
                return dsMain;
            },
            getView: function() {
                return view;
            },
            getGrid: function() {
                return grdMain;
            },
            init: function() {},
            initGrid: function() {
                var fields = [{
                        fieldName: "product_id",
                        dataType: "text",
                    }, {
                        fieldName: "product_name"
                    }, {
                        fieldName: "customer_id"
                    },
                    "customer_name",
                    "country",
                    "phone",
                    "unit",
                    "currency", {
                        fieldName: "unit_price",
                        dataType: "number"
                    }, {
                        fieldName: "quantity",
                        dataType: "number"
                    }, {
                        fieldName: "order_date",
                        dataType: "datetime",
                        datetimeFormat: "yyyy-MM-dd"
                    }, {
                        fieldName: "ship_date",
                        dataType: "datetime",
                        datetimeFormat: "iso"
                    }
                ];
                dsMain = DataLudi.createGridDataSet();
                dsMain.setFields(fields);
                me.setGridData(dsMain);


                var columns = [{
                    "name": "ProductId",
                    "fieldName": "product_id",
                    "width": "90",
                    "styles": {},
                    "header": {
                        "text": columnName["ProductId"]
                    }
                }, {
                    "name": "ProductName",
                    "fieldName": "product_name",
                    "width": "90",
                    "styles": {},
                    "header": {
                        "text": columnName["ProductName"]
                    }
                }, {
                    "name": "CustomerId",
                    "fieldName": "customer_id",
                    "width": "90",
                    "styles": {},
                    "header": {
                        "text": columnName["CustomerId"]
                    }
                }, {
                    "name": "CustomerName",
                    "fieldName": "customer_name",
                    "width": "90",
                    "styles": {},
                    "header": {
                        "text": columnName["CustomerName"]
                    }
                }, {
                    "name": "Country",
                    "fieldName": "country",
                    "width": "70",
                    "styles": {},
                    "header": {
                        "text": columnName["Country"]
                    }
                }, {
                    "name": "Phone",
                    "fieldName": "phone",
                    "width": "100",
                    "styles": {},
                    "header": {
                        "text": columnName["Phone"]
                    }
                }, {
                    "name": "Unit",
                    "fieldName": "unit",
                    "width": "90",
                    "styles": {},
                    "header": {
                        "text": columnName["Unit"]
                    }
                }, {
                    "name": "Currency",
                    "fieldName": "currency",
                    "width": "60",
                    "styles": {
                        "textAlignment": "center"
                    },
                    "header": {
                        "text": columnName["Currency"]
                    }
                }, {
                    "name": "UnitPrice",
                    "fieldName": "unit_price",
                    "width": "100",
                    "styles": {
                        "textAlignment": "far"
                    },
                    "header": {
                        "text": "UnitPrice"
                    },
                    "footer": {
                        "styles": {
                            "textAlignment": "far",
                            "numberFormat": "0,000",
                            "postfix": " $",
                            "font": "Arial,12"
                        },
                        "text": columnName["SUM"],
                        "expression": "sum",
                        "dynamicStyles": [{
                            "criteria": "value > 10000",
                            "styles": "color=#ff0000"
                        }]
                    }
                }, {
                    "name": "Quantity",
                    "fieldName": "quantity",
                    "width": "100",
                    "styles": {
                        "textAlignment": "far"
                    },
                    "header": {
                        "text": "Quantity"
                    },
                    "footer": {
                        "styles": {
                            "textAlignment": "far",
                            "numberFormat": "0,000",
                            "postfix": " $",
                            "font": "Arial,12"
                        },
                        "text": columnName["SUM"],
                        "expression": "sum",
                        "dynamicStyles": [{
                            "criteria": "value > 10000",
                            "styles": "color=#ff0000"
                        }]
                    }
                }, {
                    "name": "OrderDate",
                    "fieldName": "order_date",
                    "width": "90",
                    "styles": {
                        datetimeFormat: "yyyy-MM-dd",
                        textAlignment: "center"
                    },
                    "header": {
                        "text": columnName["OrderDate"]
                    }
                }, {
                    "name": "ShipDate",
                    "fieldName": "ship_date",
                    "width": "120",
                    "styles": {
                        datetimeFormat: "yyyy-MM-dd hh:mm",
                        textAlignment: "center"
                    },
                    "header": {
                        "text": columnName["ShipDate"]
                    }
                }];
				
                var gridMain = Ext.getCmp('grdMain');
				console.log(gridMain);
                var _mode = 'canvas';
                grdMain = DataLudi.createGridView('grdMain', null, _mode == 'dom' ? '$_html_test_' : '');
                grdMain.setColumns(columns);
                
                // grdMain.setColumns(columns);

                grdMain.setDataSource(dsMain);
                grdMain.checkBar().setVisible(false);

                grdMain.header().head().setPopupMenu({
                    label: 'DataLudi Grid Version',
                    callback: function() {
                        alert(DataLudi.getVersion());
                    }
                });

                grdMain.onDataCellClicked = function(grid, index) {
                    if (index && index.dataColumn() && index.getDataIndex(grid) >= 0) {
                        var v = dsMain.getValue(index.getDataIndex(grid), index.dataField());
                        Ext.Msg.alert('onDataCellClicked', v);
                    }
                };
                grdMain.onColumnHeaderDblClicked = function(grid, column) {
                    Ext.Msg.alert('onColumnHeaderDblClicked', column.name());
                };//method end
            }//public funciton end
        };//return end
    }//object end
});// class end