var RealGrids = (function() {
	// "use strict";

	var win = window;
	var doc = document;
	var REQUIRED_VERSION = "1.0.4.1683";
	var TRACE = false;

	var __grids = {};

	function _enum(v) {
		return Object.freeze ? Object.freeze(v) : v;
	}

	/**
	 * DataType.
	 */
	var DataType = _enum( {
		TEXT : "text",
		BOOL : "bool",
		NUMBER : "numeric",
		DATETIME : "datetime"
	});

	/**
	 * RowState
	 */
	var RowState = _enum( {
		NONE : "none",
		CREATED : "created",
		UPDATED : "updated",
		DELETED : "deleted",
		CREATE_AND_DELETED : "createAndDeleted"
	});

	/**
	 * DataField.
	 */
	function DataField(fieldName) {
		this.fieldName = fieldName;
		this.dataType = DataType.TEXT;
		this.length = 10;
		// 기준 필드 이름.
		this.baseField = null;
		this.defaultValue = null;
	}

	/**
	 * DataLoadOptions
	 */
	function DataLoadOptions() {
		this.type = "json"; // "json" | "xml" | "csv"
		this.url = null; // server url
		this.method = "get"; // "get" | "post"
		this.params = null; // name value pairs
		this.rows = "row"; // row element name | rows array name
		this.progress = true; // show progress bar
		this.dateFormat = undefined;
	}

	/**
	 * LocalDataProvider.
	 */
	function LocalDataProvider() {
		// callbacks
		this.onLoadCompleted = function(provider) {
			TRACE && win.console && console.log("onLoadCompleted");
		};
		this.onLoadFailed = function(provider, error) {
			TRACE && win.console && console.log("onLoadFailed:" + error);
		};
		this.onRowInserting = function(provider, row) {
			TRACE && win.console && console.log("onRowInserting:" + row);
			return true;
		};
		this.onRowInserted = function(provider, row) {
			TRACE && win.console && console.log("onRowInserted:" + row);
		};
		this.onRowsDeleted = function(provider, rows) {
			TRACE && win.console && console.log("onRowsDeleted:" + rows);
		};
		this.onRowCountChanged = function(provider, count) {
			TRACE && win.console && console.log("onRowCountChanged:" + count);
		};

		// internal variables
		this.dom = null;
		this.fields = [];

		this.__comparers = {};
		this.__maxComparer = 0;
	}

	LocalDataProvider.prototype = {
		type : "local",

		// methods
		refreshClients : function() {
			this.dom.refreshDataClients();
		},
		getOptions : function() {
			return this.dom.getDataOptions();
		},
		setOptions : function(options) {
			this.dom.setDataOptions(options);
		},
		setFields : function(fields) {
			this.dom.setDataFields(fields);
			this.fields = fields;
		},
		getFieldCount : function() {
			return this.fields ? this.fields.length : 0;
		},
		getRowCount : function() {
			return this.dom.getRowCount();
		},
		setRowCount : function(newCount, fillDefaults, defaultValues) {
			fillDefaults = arguments.length > 1 ? fillDefaults : false;
			defaultValues = arguments.length > 2 ? defaultValues : null;
			this.dom.setRowCount(newCount, fillDefaults, defaultValues);
		},
		loadData : function(options, onCompleted, onFailed) {
			this.onLoadCompleted = onCompleted;
			this.onLoadFailed = onFailed;
			this.dom.loadData(options);
		},
		setRows : function(rows) {
			this.dom.setDataRows(rows);
		},
		setJsonRows : function(rows, rowsProp) {
			this.dom.setJsonRows(rows, rowsProp);
		},
		appendRows : function(rows, start, count) {
			start = arguments.length > 1 ? start : 0;
			count = arguments.length > 2 ? count : -1;
			this.dom.appendRows(rows, start, count);
		},
		insertRows : function(row, rows, start, count) {
			start = arguments.length > 2 ? start : 0;
			count = arguments.length > 3 ? count : -1;
			this.dom.insertRows(row, rows, start, count);
		},
		updateRows : function(row, rows, start, count) {
			start = arguments.length > 2 ? start : 0;
			count = arguments.length > 3 ? count : -1;
			this.dom.updateRows(row, rows, start, count);
		},
		clearRows : function() {
			this.dom.clearDataRows();
		},
		addRow : function(values) {
			this.dom.addDataRow(values);
		},
		removeRow : function(row) {
			this.dom.removeDataRow(row);
		},
		updateRow : function(row, values) {
			this.dom.updateDataRow(row, values);
		},
		hasData : function(row) {
			return this.dom.hasData(row);
		},
		// row 행을 json 객체로 리턴
		getRow : function(row) {
			return this.dom.getDataRow(row);
		},
		// 폐기 예정
		getDataRow : function(row) {
			return this.dom.getDataRow(row);
		},
		/*
		 * startRow에서 endRow까지 포함된 row 데이터를 Array로 리턴. @param endRow 지정하지 않거나
		 * 0보다 작은 값을 지정하면 마지막 row까지 리턴.
		 */
		getRows : function(startRow, endRow) {
			startRow = arguments.length ? startRow : 0;
			endRow = arguments.length > 1 ? endRow : -1;
			return this.dom.getDataRows(startRow, endRow);
		},
		// 폐기 예정
		getDataRows : function(startRow, endRow) {
			startRow = arguments.length ? startRow : 0;
			endRow = arguments.length > 1 ? endRow : -1;
			return this.dom.getDataRows(startRow, endRow);
		},
		/*
		 * startRow에서 endRow까지 포함된 row 데이터를 객체 Array로 리턴. @param endRow 지정하지 않거나
		 * 0보다 작은 값을 지정하면 마지막 row까지 리턴.
		 */
		getJsonRows : function(startRow, endRow) {
			startRow = arguments.length ? startRow : 0;
			endRow = arguments.length > 1 ? endRow : -1;
			return this.dom.getJsonRows(startRow, endRow);
		},
		checkRowStates : function(check) {
			this.dom.checkRowStates(check);
		},
		getRowState : function(row) {
			return this.dom.getRowState(row);
		},
		getStateRows : function(rowState) {
			return this.dom.getStateRows(rowState);
		},
		getAllStateRows : function() {
			return this.dom.getAllStateRows();
		},
		clearRowStates : function(deleteRows) {
			this.dom.clearRowStates(deleteRows);
		},
		setComparer : function(field, comparer) {
			this.__maxComparer++;
			this.__comparers[this.__maxComparer] = comparer;
			this.dom.setDataComparer(field, comparer);
		},
		getComparer : function(comparerId) {
			return this.__comparers[comparerId];
		}
	};

	/**
	 * TreeDataProvider
	 */
	function TreeDataProvider() {
		// callbacks
		this.checkParentProc = function(parent, child) {
			return false;
		};
		this.onLoadCompleted = function(provider) {
			TRACE && win.console && console.log("onTreeLoadCompleted");
		};
		this.onLoadFailed = function(provider, error) {
			TRACE && win.console && console.log("onTreeLoadFailed:" + error);
		};

		// internal variables
		this.dom = null;
		this.fields = [];

		this.__comparers = {};
		this.__maxComparer = 0;
	}

	TreeDataProvider.prototype = {
		type : "tree",

		// methods
		setFields : function(fields) {
			this.dom.setDataFields(fields);
			this.fields = fields;
		},
		getFieldCount : function() {
			return this.fields ? this.fields.length : 0;
		},
		getRowCount : function() {
			return this.dom.getRowCount();
		},
		setDataRows : function(rows, treeField, needSorting, childrenField, iconField) {
			this.dom.setTreeDataRows(rows, treeField, needSorting, childrenField, iconField);
		},
		setXmlRows : function(xml, rowElement, childrenField, iconField) {
			this.dom.setTreeXmlSource(xml, rowElement, childrenField, iconField);
		},
		setJsonRows : function(json, rowsProp, childrenProp, iconProp) {
			this.dom.setTreeJsonSource(json, rowsProp, childrenProp, iconProp);
		},
		loadData : function(options, onCompleted, onFailed) {
			this.onLoadCompleted = onCompleted;
			this.onLoadFailed = onFailed;
			this.dom.loadTreeData(options);
		},
		clearRows : function() {
			this.dom.clearDataRows();
		},
		// row 행을 json 객체로 리턴
		getRow : function(row) {
			return this.dom.getDataRow(row);
		},
		addChildRow : function(rowId, values, iconIndex, hasChildren) {
			return this.dom.treeAddRow(rowId, values, iconIndex, hasChildren);
		},
		getIconIndex : function(rowId) {
			return this.dom.getTreeIconIndex(rowId);
		},
		setIconIndex : function(rowId, iconIndex) {
			this.dom.setTreeIconIndex(rowId, iconIndex);
		},
		getChildCount : function(rowId) {
			return this.dom.getChildCount(rowId);
		},
		checkRowStates : function(check) {
			this.dom.checkRowStates(check);
		},
		getRowState : function(row) {
			return this.dom.getRowState(row);
		},
		getStateRows : function(rowState) {
			return this.dom.getStateRows(rowState);
		},
		clearRowStates : function(deleteRows) {
			this.dom.clearRowStates(deleteRows);
		},
		setComparer : function(field, comparer) {
			this.__maxComparer++;
			this.__comparers[this.__maxComparer] = comparer;
			this.dom.setDataComparer(field, comparer);
		},
		getComparer : function(comparerId) {
			return this.__comparers[comparerId];
		}
	};

	/**
	 * Summary mode
	 */
	var SummaryMode = _enum( {
		NONE : "none",
		AGGREGATE : "aggregate",
		STATISTICAL : "statistical"
	});

	/**
	 * Alignment. Text나 아이콘 등의 위치를 지정한다.
	 */
	var Alignment = _enum( {
		NEAR : "near",
		CENTER : "center",
		FAR : "far"
	});

	/**
	 * ContentFit. 이미지르 셀에 어떤 크기/위치에 표시할 것인 지를 지정한다.
	 */
	var ContentFit = _enum( {
		// 맞추지 않고 top/left 에서부터 그린다.
		NONE : "none",
		// 맞추지 않고 중앙에 정렬한다.
		CENTER : "center",
		// 높이와 너비를 셀 크기에 맟준다(왜곡된다).
		BOTH : "both",
		// 너비를 셀 너비에 맟주고 높이는 너비의 비율대로 중앙 정렬.
		WIDTH : "width",
		// 높이를 셀 높이에 맞추고 너비는 높이의 비율대로 중앙 정렬.
		HEIGHT : "height",
		// 최대한 셀 크기에 맞춘다(넘치지 않게 한다).
		AUTO : "auto"
	});

	/**
	 * IconLocation. ImageList에 포함된 이미지 아이콘을 셀에 표시할 때 이미지의 위치를 지정한다. iconOffset,
	 * iconAlignment, iconPadding 스타일 속성들과 함께 사용한다.
	 */
	var IconLocation = _enum( {
		// 아이콘을 text 왼쪽에 표시한다.
		LEFT : "left",
		// 아이콘을 text 오른쪽에 표시한다.
		RIGHT : "right",
		// 아이콘을 text 위쪽에 표시한다.
		TOP : "top",
		// 아이콘을 text 아래쪽에 표시한다.
		BOTTOM : "bottom"
	});

	/**
	 * CellButton.
	 */
	var CellButton = _enum( {
		NONE : "none",
		ACTION : "action",
		POPUP : "popup"
	});

	/**
	 * GridFitStyle.
	 */
	var GridFitStyle = _enum( {
		NONE : "none",
		EVEN : "even",
		LAST_FILL : "lastFill",
		FIRST_FILL : "firstFill"
	});

	/**
	 * ValidationMode.
	 */
	var ValidationMode = _enum( {
		ALWAYS : "always",
		INSERT : "insert",
		UPDATE : "update"
	});

	/**
	 * ValidationLevel.
	 */
	var ValidationLevel = _enum( {
		ERROR : "error",
		WARNING : "warning",
		INFO : "info",
		IGNORE : "ignore"
	});

	/**
	 * SelectionStyle.
	 */
	var SelectionStyle = _enum( {
		BLOCK : "block",
		ROWS : "rows",
		COLUMNS : "columns",
		NONE: "none"
	});

	/**
	 * ColumnGroup Orientation.
	 */
	var ColumnGroupOrientation = _enum( {
		HORIZONTAL : "horizontal",
		VERTICAL : "vertical"
	});

	/*
	 * RowGroup Adornments
	 */
	var RowGroupAdornments = _enum( {
		BOTH : "both",
		HEADER : "header",
		FOOTER : "footer"
	});

	/**
	 * Indicator display value.
	 */
	var IndicatorValue = _enum( {
		NONE : "none",
		INDEX : "index",
		ROW : "row"
	});

	/**
	 * Sort style.
	 */
	var SortStyle = _enum( {
		NONE : "none", // 정렬 불가
		EXCLUSIVE : "exclusive", // 최근 클릭한 컬럼으로 정렬
		INCLUSIVE : "inclusive", // 지정한 순서대로 모든 컬럼으로 정렬
		REVERS : "reverse" // 나중에 지정한 컬럼을 우선 순위로 모든 컬럼 정렬
	});

	/**
	 * Sort direction.
	 */
	var SortDirection = _enum({
		ASCENDING : "ascending",
		DSCENDING : "dscending"
	});
	
	/**
	 * Region visibility when exporting
	 */
	var PrintVisibility = _enum({
		DEFAULT : "default",
		VISIBLE : "visible",
		HIDDEN : "hidden"
	});
	
	/**
	 * Menu item type
	 */
	var MenuItemType = _enum({
		NORMAL : "normal",
		CHECK : "check",
		RADIO : "radio",
		SEPARATOR : "separator"
	});

	/**
	 * Ime mode.
	 */
	var ImeMode = _enum({
		ALPHA : "alpha",
		ALPHA_FULL: "alpahFull",
		KOREAN : "korean",
		CHINESE : "chinese",
		JAPANESE_HIRAGANA : "hiragana",
		JAPANESE_KATAKANA : "katakana",
		JAPANESE_KATAKANA_FULL : "katakanaFull",
		DONT_CARE : "dontCare"
	});
	
	/**
	 * Cell index
	 */
	function CellIndex() {
		this.itemIndex = -1;
		this.column = null;
		// setCurrent()로 설정할 때 위 두 값 대신 사용할 수 있음.
		this.dataRow = -1;
		this.fieldName = null;
	}
	
	/**
	 * MenuItem
	 */
	function MenuItem(label) {
		this.label = label;
		this.type = MenuItemType.NORMAL;
		this.checked = false;
		this.group = undefined;
		this.data = null;
		this.children = [];
		this.callback = null;	// function (data);
	}

	/**
	 * ImageList.
	 */
	function ImageList(name) {
		this.name = name;
		this.rootUrl = null;
		this.images = [];
	}
	
	/**
	 * SearchOptions.
	 */
	function SearchOptions() {
		this.fields = [];
		this.values = [];
		this.startIndex = 0;
		this.wrap = true;
		this.select = true;
		this.caseSensitive = false;
		this.partialMatch = false;
	}

	/**
	 * EditValidation.
	 */
	function EditValidation() {
		this.name = null;
		this.active = true;
		this.mode = ValidationMode.ALWAYS;
		this.level = ValidationLevel.ERROR;
		this.criteria = null;
		this.message = null;
		this.description = null;
	}

	/**
	 * ValidationResult.
	 */
	function ValidationResult(result) {
		this.level = result && result.level || ValidationLevel.ERROR;
		this.message = result && result.message || "Validation error.";
	}

	/**
	 * DynamicStyle.
	 */
	function DynamicStyle(criteria, styles) {
		this.criteria = criteria;
		this.styles = styles;
	}

	/**
	 * CellRenderer.
	 */
	function CellRenderer() {
	}
	CellRenderer.BAR = "bar";
	CellRenderer.CHECK = "check";
	CellRenderer.IMAGE = "image";
	CellRenderer.ICON = "icon";
	CellRenderer.SHAPE = "shape";
	CellRenderer.SIGNAL = "signal";

	/**
	 * BarCellRenderer.
	 */
	function BarCellRenderer(options) {
		this.minimum = options && options.minimum || 0;
		this.maximum = options && options.maximum || 100;
		this.minimumWidth = options && options.minimumWidth || 100;
	}
	BarCellRenderer.prototype.type = CellRenderer.BAR;

	/**
	 * CheckCellRenderer.
	 */
	function CheckCellRenderer(options) {
		this.trueValues = options && options.trueValues || null; // "aaa,bbb,ccc"
		this.falseValues = options && options.falseValues || null;
	}
	CheckCellRenderer.prototype.type = CellRenderer.CHECK;

	/**
	 * ImageCellRenderer.
	 */
	function ImageCellRenderer(options) {
		this.smoothing = options && options.smoothing || false;
	}
	ImageCellRenderer.prototype.type = CellRenderer.IMAGE;

	/**
	 * IconCellRenderer. 컬럼의 ImageList와 iconIndex 스타일 등으로 지정하는 이미지 아이콘과 텍스트를 같이
	 * 표시한다.
	 */
	function IconCellRenderer(options) {
	}
	IconCellRenderer.prototype.type = CellRenderer.ICON;

	/**
	 * ShapeCellRenderer.
	 */
	function ShapeCellRenderer(options) {
	}
	ShapeCellRenderer.prototype.type = CellRenderer.SHAPE;
	ShapeCellRenderer.NULL = "null";
	ShapeCellRenderer.RECTANGLE = "rectangle";
	ShapeCellRenderer.TRIANLGE = "triangle";
	ShapeCellRenderer.INVERTED_TRIANLGE = "invertedtriangle";
	ShapeCellRenderer.DIAMOND = "diamond";
	ShapeCellRenderer.UP_ARROW = "uparrow";
	ShapeCellRenderer.DOWN_ARROW = "downarrow";
	ShapeCellRenderer.LEFT_ARROW = "leftarrow";
	ShapeCellRenderer.RIGHT_ARROW = "rightarrow";
	ShapeCellRenderer.PLUS = "plus";
	ShapeCellRenderer.MINUS = "minus";
	ShapeCellRenderer.EQUAL = "equal";

	/**
	 * SignalCellRenderer.
	 */
	function SignalCellRenderer(options) {
		this.barCount = options && options.barCount || 4;
	}
	SignalCellRenderer.prototype.type = CellRenderer.SIGNAL;

	/**
	 * CellEditor.
	 */
	function CellEditor(options) {
	}
	CellEditor.LINE = "line";
	CellEditor.MULTILINE = "multiLine";
	CellEditor.DROPDOWN = "dropDown";
	CellEditor.NUMBER = "number";
	CellEditor.DATE = "date";

	/**
	 * LineCellEditor.
	 */
	function LineCellEditor(options) {
	}
	LineCellEditor.prototype.type = CellEditor.LINE;

	/**
	 * MultiLineCellEditor.
	 */
	function MultiLineCellEditor(options) {
	}
	MultiLineCellEditor.prototype.type = CellEditor.MULTILINE;

	/**
	 * DropDownCellEditor.
	 */
	function DropDownCellEditor(options) {
		this.values = null; // []
		this.labels = null; // []
	}
	DropDownCellEditor.prototype.type = CellEditor.DROPDOWN;

	/**
	 * NumberCellEditor.
	 */
	function NumberCellEditor(options) {
	}
	NumberCellEditor.prototype.type = CellEditor.NUMBER;

	/**
	 * DateCellEditor.
	 */
	function DateCellEditor(options) {
		this.editFormat = options && options.editFormat;
	}
	DateCellEditor.prototype.type = CellEditor.DATE;

	/**
	 * ColumnHeader.
	 */
	function ColumnHeader() {
		this.text = null;
	}

	/**
	 * DataColumn 명세. undefined로 지정된 속성은 플렉스 쪽에서 무시한다.
	 */
	function DataColumn() {
		this.name = undefined;
		this.tag = undefined;
		this.width = 120;
		this.fieldName = undefined;
		this.visible = true;
		this.resizable = true;
		this.movable = true;
		this.displayIndex = undefined;
		this.displayWidth = undefined;
		this.sortable = true;
		this.button = CellButton.NONE;
		this.popupMenu = null;
		this.imageList = undefined;
		this.header = undefined; // ColumnHeader
		this.styles = undefined; // GridViewStyles
		this.dynamicStyles = undefined; // DynamicStyle[]
		this.footer = undefined; // ColumnFooter
		this.editor = undefined; // CellEditor
		this.renderer = undefined; // CellRenderer
		this.filters = undefined; // ColumnFilter[]
		this.validations = undefined; // EditValidation[]
	}
	DataColumn.prototype.type = "data";
	DataColumn.prototype.proxy = function() {
		return {
			type : this.type,
			refId : this.refId
		};
	};

	/**
	 * ColumnGroup 명세. undefined로 지정된 속성은 플렉스 쪽에서 무시한다.
	 */
	function ColumnGroup() {
		this.orientation = ColumnGroupOrientation.HORIZONTAL;
		this.header = undefined; // ColumnHeader
		this.name = undefined;
		this.width = 120;
		this.visible = true;
		this.resizable = true;
		this.movable = true;
		this.displayIndex = undefined;
		this.displayWidth = undefined;
		this.hideChildHeaders = false;
		this.styles = undefined;
	}
	ColumnGroup.prototype.type = "group";
	ColumnGroup.prototype.proxy = function() {
		return {
			type : this.type,
			refId : this.refId
		};
	};

	// 아래 옵션들은 생성자로서 사용되어서는 안된다.
	// 그리드에서 지정된 기본값을 표시한 속성들의 명세다.
	// 그리드로 설정을 넘길 때는 속성들 중 변경할 값들만 넘겨야 한다.
	// undefine로 지정된 속성은 flex에서 무시한다.

	/**
	 * Grid options.
	 */
	function GridOptions() {
		this.summaryMode = SummaryMode.AGGREGATE;
	}

	/**
	 * Display options.
	 */
	function DisplayOptions() {
		this.columnResizable = true;
		this.columnMovable = true;
		this.defaultColumnWidth = 120;
		this.fitStyle = GridFitStyle.NONE;
		this.rowResizable = false;
		this.defaultRowHeight = 0;
		this.hscrollBar = true;
		this.vscrollBar = true;
		this.hintDuration = 2000;
		this.horzScrollStep = 8;
		this.emptyMessage = "Loading...";
	}

	/**
	 * Editing options.
	 */
	function EditOptions() {
		this.deletable = false;
		this.deleteRowsConfirm = true;
		this.deleteRowsMessage = undefined;
		this.readOnly = false;
		this.appendable = false;
		this.insertable = false;
		this.updatable = true;
		this.validateOnEdited = true;
		this.hintOnError = true;
		this.commitLevel = ValidationLevel.IGNORE;
		this.useTabKey = true;
	}

	/**
	 * Panel options.
	 */
	function PanelOptions() {
		this.minHeight = undefined;
		this.visible = true;
	}

	/**
	 * Fixed options.
	 */
	function FixedOptions() {
		this.colCount = 0;
		this.rowCount = 0;
		this.exceptFromFiltering = true;
		this.exceptFromSorting = true;
		this.editable = false;
		this.resizable = false;
		// 최상위 컬럼들에만 적용
		this.movable = false;
		this.colBarWidth = 3;
		this.rowBarHeight = 3;
		this.ignoreColumnStyles = true;
		this.ignoreDynamicStyles = false;
	}

	/**
	 * Indicator options.
	 */
	function Indicator() {
		this.visible = false;
		this.displayValue = RealGrids.IndicatorValue.INDEX;
		this.minWidth = 40;
		this.maxWidth = 0;
		this.minWidth = 0;
	}

	/**
	 * Status bar options.
	 */
	function StatusBar() {
		this.visible = false;
		this.width = 20;
	}

	/**
	 * Check bar options.
	 */
	function CheckBar() {
		this.visible = false;
		this.width = 20;
	}

	/**
	 * Header options.
	 */
	function Header() {
		this.minHeight = 23;
		this.visible = false;
	}

	/**
	 * Footer options.
	 */
	function Footer() {
		this.minHeight = 23;
		this.visible = false;
	}

	/**
	 * RowGroup options
	 */
	function RowGroupOptions() {
		this.expandedAdornments = RowGroupAdornments.BOTH;
		this.collapsedAdornments = RowGroupAdornments.HEADER;
		this.summaryMode = SummaryMode.AGGREGATE;
	}

	/**
	 * Select options.
	 */
	function SelectOptions() {
		this.style = SelectionStyle.BLOCK;
		this.rangeSelect = true;
	}

	/**
	 * Sorting options.
	 */
	function SortingOptions() {
		this.enabled = true;
		this.style = SortStyle.EXCLUSIVE;
		this.commitBeforeSorting = true;
	}

	/**
	 * Filtering options
	 */
	function FilteringOptions() {
		this.enabled = true;
	}

	/**
	 * GridView styles. 명시적으로 값이 지정되지 않은 속성은 조상 스타일 값을 계승한다. "자신의 명시적인 값 > 조상들의
	 * 명시적인 값 > 기본값 > 조상들의 기본값 > 스타일 클래스 기본값" 순서대로 우선 순위를 갖는다. undefined로 값을
	 * 지정하면 그 스타일의 명시적 설정값을 지운다. undefined가 아닌 값으로 지정하면 그 값이 이 스타일의 명시적인 값이 된다.
	 */
	var GridViewStyles = function(styles) {
		if (styles) {
			for ( var prop in styles) {
				this[prop] = styles[prop];
			}
		}

		// this.background = "#ffffffff";
		// this.selectedBackground = "#FF696969";
		// this.inactiveBackground = "#FFD3D3D3";
		// this.border = null;
		// this.borderLeft =
		// this.borderRight =
		// this.borderTop =
		// this.borderBottom =
		// this.line =
		// this.font =
		// this.foreground =
		// this.textAlignment =
		// this.lineAlignment =
		// this.numberFormat =
		// this.dateFormat =
		// this.prefix =
		// this.postfix =
		// this.textWrap =
		// this.paddingLeft =
		// this.paddingRight =
		// this.paddingTop =
		// this.paddingBottom =
		// this.buttonWidth =
		// this.iconIndex =
		// this.iconLocation =
		// this.iconAlignment =
		// this.iconOffset =
		// this.iconPadding =
		// this.contentFit =
		// this.selectionDisplay =
		// this.hoveredBackground =
		// this.hoveredForeground =
		// this.hoveredMaskBackground =
		// this.hoveredMaskBorder =
		// this.figureBackground =
		// this.figureInactiveBackground =
		// this.figureBorder =
		// this.figureSize =
		// this.figureName =
		// this.figureState =

		// style regions
		GridViewStyles.DEFAULT = "grid";
		GridViewStyles.PANEL = "panel";
		GridViewStyles.BODY = "body";
		GridViewStyles.BODY_EMPTY = "body.empty";
		GridViewStyles.FIXED = "fixed";
		GridViewStyles.FIXED_COLBAR = "fixed.colBar";
		GridViewStyles.FIXED_ROWBAR = "fixed.rowBar";
		GridViewStyles.HEADER = "header";
		GridViewStyles.HEADER_GROUP = "header.group";
		GridViewStyles.FOOTER = "footer";
		GridViewStyles.ROWGROUP_HEADER = "rowGroup.header";
		GridViewStyles.ROWGROUP_FOOTER = "rowGroup.footer";
		GridViewStyles.ROWGROUP_HEAD = "rowGroup.head";
		GridViewStyles.ROWGROUP_FOOT = "rowGroup.foot";
		GridViewStyles.ROWGROUP_BAR = "rowGroup.bar";
		GridViewStyles.ROWGROUP_HEADER_BAR = "rowGroup.headerBar";
		GridViewStyles.ROWGROUP_FOOTER_BAR = "rowGroup.footerBar";
		GridViewStyles.ROWGROUP_PANEL = "rowGroup.panel";
		GridViewStyles.ROWGROUP_LEVELS = "rowGruop.levels";
		GridViewStyles.INDICATOR = "indicator";
		GridViewStyles.INDICATOR_HEAD = "indicator.head";
		GridViewStyles.INDICATOR_FOOT = "indicator.foot";
		GridViewStyles.CHECKBAR = "checkBar";
		GridViewStyles.CHECKBAR_HEAD = "checkBar.head";
		GridViewStyles.CHECKBAR_FOOT = "checkBar.foot";
		GridViewStyles.STATUSBAR = "statusBar";
		GridViewStyles.STATUSBAR_HEAD = "statusBar.head";
		GridViewStyles.STATUSBAR_FOOT = "statusBar.foot";
		GridViewStyles.SELECTION = "selection";
		GridViewStyles.TREE_EXPANDER = "tree.expander";
	};

	/**
	 * GridBase
	 */
	function GridBase(id, ignoreVersion) {
		this.id = id;
		this.dom = win.jQuery ? $("#" + id)[0] : doc.getElementById(id);

		if (!ignoreVersion)
			checkVersion(this.dom);

		this.dataProvider = null;

		this.__defStyles = new GridViewStyles();
		this.__maxRef = 0;
		__grids[id] = this;

		function calcVersion(ver) {
			ver = ver.split(".");
			var v = 0;
			for ( var i = ver.length - 1; i >= 0; i--) {
				v += Math.pow(10, ver.length - 1 - i) * ver[i];
			}
			return v;
		}

		function checkVersion(dom) {
			if (dom && dom.getVersion) {
				var swf = dom.getVersion();
				if (!swf) {
					alert("그리드 버젼 정보를 가져오지 못했습니다.");
					return;
				}

				var swfver = calcVersion(swf);
				var reqver = calcVersion(REQUIRED_VERSION);
				if (swfver < reqver) {
					alert("지난 RealGrid 버젼입니다: " + swf + "\n" + "새로 고침으로 업데이트 해주십시오: " + REQUIRED_VERSION);
				}

			} else {
				alert("그리드가 로드되지 않았거나 버젼 정보를 가져올 수 없습니다.");
			}
		}
	}

	function __setIndices(grid, columns) {
		for ( var i = 0; i < columns.length; i++) {
			column = columns[i];
			column.refId = grid.__maxRef++;
			if (column.columns) {
				__setIndices(grid, column.columns);
			}
		}
	}

	GridBase.prototype = {
		// methods
		getVersion : function() {
			return this.dom.getVersion();
		},
		ping : function(message) {
			this.dom.ping(message);
		},
		setFocus : function() {
			// ie에서 동작한다.
			this.dom.focus();
			this.dom.setFocus();
		},
		beginUpdate : function() {
			this.dom.beginUpdate();
		},
		endUpdate : function(force) {
			this.dom.endUpdate(force);
		},
		getItemCount : function() {
			return this.dom.getItemCount();
		},
	
		// data
		setDataProvider : function(provider) {
			if (!provider.dom) {
				provider.dom = this.dom;
				this.dom.setDataProvider(provider.type);
			}
			this.dataProvider = provider;
		},
		getDataProvider : function() {
			return this.dataProvider;
		},
		getRowId : function(itemIndex) {
			return this.dom.getDataIndex(itemIndex);
		},
		// return 되는 row 개체의 __rowId 속성에 row id가 담겨있다.
		getRowData : function(itemIndex) {
			return this.dom.getRowData(itemIndex);
		},
		setRowData : function(itemIndex, values) {
			return this.dom.setRowData(itemIndex, values);
		},
		orderBy : function(fieldNames, sortDirs) {
			if (fieldNames) {
				this.dom.orderBy(fieldNames, sortDirs);
			}
		},
		groupBy : function(fieldNames) {
			if (fieldNames) {
				this.dom.groupBy(fieldNames);
			}
		},
		getCheckedItems : function (all) {
			return this.dom.getCheckedItems(all);
		},
		getCheckedRows : function () {
			return this.dom.getCheckedRows();
		},

		// columns
		setColumns : function(columns) {
			this.__maxRef = 0;
			__setIndices(this, columns);
			this.dom.setColumns(columns);
		},
		getColumnNames : function() {
			return this.dom.getColumnNames();
		},
		getGroupNames : function() {
			return this.dom.getGroupNames();
		},
		columnByName : function(name) {
			return this.dom.columnByName(name);
		},
		// 제거 예정
		findColumn : function(name) {
			return this.dom.columnByName(name);
		},
		columnByTag : function(tag) {
			return this.dom.columnByTag(tag);
		},
		columnsByTag : function(tag) {
			return this.dom.columnsByTag(tag);
		},
		columnByField : function(fieldName) {
			return this.dom.columnByField(fieldName);
		},
		columnsByField : function(fieldName) {
			return this.dom.columnsByField(fieldName);
		},
		getColumnHeader : function(column) {
			if (column)
				return this.dom.getColumnHeader(column.refId);
		},
		getProxy : function(column) {
			if (column) {
				proxy = {
					type : column.type,
					refId : column.refId,
					name : column.name
				};
				proxy.column = column;
				return proxy;
			}
			return null;
		},
		setColumn : function(column) {
			this.dom.setColumn(column);
		},

		// options
		// @Deprecated
		setGridOptions : function(options) {
			this.dom.setGridOptions(options);
		},
		// @Deprecated
		getGridOptions : function() {
			return this.dom.getGridOptions();
		},
		// @Deprecated
		setOptions : function(options) {
			this.dom.setGridOptions(options);
		},
		// @Deprecated
		getOptions : function() {
			return this.dom.getGridOptions();
		},
		options : function(options) {
			if (!arguments.length)
				return this.dom.getGridOptions();
			else if (options)
				this.dom.setGridOptions(options);
		},
		// @Deprecated
		setDisplayOptions : function(options) {
			this.dom.setDisplayOptions(options);
		},
		// @Deprecated
		getDisplayOptions : function() {
			return this.dom.getDisplayOptions();
		},
		displayOptions : function(options) {
			if (!arguments.length)
				return this.dom.getDisplayOptions();
			else if (options)
				this.dom.setDisplayOptions(options);
		},
		// @Deprecated
		setEditOptions : function(options) {
			this.dom.setEditOptions(options);
		},
		// @Deprecated
		getEditOptions : function() {
			return this.dom.getEditOptions();
		},
		editOptions : function(options) {
			if (!arguments.length)
				return this.dom.getEditOptions();
			else if (options)
				this.dom.setEditOptions(options);
		},
		// @Deprecated
		setPanelOptions : function(options) {
			this.dom.setPanelOptions(options);
		},
		// @Deprecated
		getPanelOptions : function() {
			return this.dom.getPanelOptions();
		},
		panel : function(options) {
			if (!arguments.length)
				return this.dom.getPanelOptions();
			else if (options)
				this.dom.setPanelOptions(options);
		},
		// @Deprecated
		setFixedOptions : function(options) {
			this.dom.setFixedOptions(options);
		},
		// @Deprecated
		getFixedOptions : function() {
			return this.dom.getFixedOptions();
		},
		fixedOptions : function(options) {
			if (!arguments.length)
				return this.dom.getFixedOptions();
			else if (options)
				this.dom.setFixedOptions(options);
		},
		// @Deprecated
		setIndicatorOptions : function(options) {
			this.dom.setIndicator(options);
		},
		// @Deprecated
		getIndicatorOptions : function() {
			return this.dom.getIndicator();
		},
		indicator : function(options) {
			if (!arguments.length)
				return this.dom.getIndicator();
			else if (options)
				this.dom.setIndicator(options);
		},
		// @Deprecated
		setStatesBarOptions : function(options) {
			this.dom.setStatusBar(options);
		},
		// @Deprecated
		getStatesBarOptions : function() {
			return this.dom.getStatusBar();
		},
		statusBar : function(options) {
			if (!arguments.length)
				return this.dom.getStatusBar();
			else if (options)
				this.dom.setStatusBar(options);
		},
		// @Deprecated
		setCheckBarOptions : function(options) {
			this.dom.setCheckBar(options);
		},
		// @Deprecated
		getCheckBarOptions : function() {
			return this.dom.getCheckBar();
		},
		checkBar : function(options) {
			if (!arguments.length)
				return this.dom.getCheckBar();
			else if (options)
				this.dom.setCheckBar(options);
		},
		// @Deprecated
		setHeaderOptions : function(options) {
			this.dom.setHeader(options);
		},
		// @Deprecated
		getHeaderOptions : function() {
			return this.dom.getHeader();
		},
		header : function(options) {
			if (!arguments.length)
				return this.dom.getHeader();
			else if (options)
				this.dom.setHeader(options);
		},
		// @Deprecated
		setFooterOptions : function(options) {
			this.dom.setFooter(options);
		},
		// @Deprecated
		getFooterOptions : function() {
			return this.dom.getFooter();
		},
		footer : function(options) {
			if (!arguments.length)
				return this.dom.getFooter();
			else if (options)
				this.dom.setFooter(options);
		},
		// @Deprecated
		setRowGroupOptions : function(options) {
			this.dom.setRowGroupOptions(options);
		},
		// @Deprecated
		getRowGroupOptions : function() {
			return this.dom.getRowGroupOptions();
		},
		rowGroup : function(options) {
			if (!arguments.length)
				return this.dom.getRowGroupOptions();
			else if (options)
				this.dom.setRowGroupOptions(options);
		},
		// @Deprecated
		setSelectOptions : function(options) {
			this.dom.setSelectOptions(options);
		},
		// @Deprecated
		getSelectOptions : function() {
			return this.dom.getSelectOptions();
		},
		selectOptions : function(options) {
			if (!arguments.length)
				return this.dom.getSelectOptions();
			else if (options)
				this.dom.setSelectOptions(options);
		},
		// @Deprecated
		setSortingOptions : function(options) {
			this.dom.setSortingOptions(options);
		},
		// @Deprecated
		getSortingOptions : function() {
			return this.dom.getSortingOptions();
		},
		sortingOptions : function(options) {
			if (!arguments.length)
				return this.dom.getSortingOptions();
			else if (options)
				this.dom.setSortingOptions(options);
		},
		// @Deprecated
		setFilteringOptions : function(options) {
			this.dom.setFilteringOptions(options);
		},
		// @Deprecated
		getFilteringOptions : function() {
			return this.dom.getFilteringOptions();
		},
		fiteringOptions : function(options) {
			if (!arguments.length)
				return this.dom.getFilteringOptions();
			else if (options)
				this.dom.setFilteringOptions(options);
		},
		setValidations : function(validations) {
			this.dom.setValidations(validations);
		},

		// imageList
		/*
		 * @param imageList string
		 */
		addImageList : function(imageList) {
			this.dom.addImageList(imageList);
		},
		
		// menu
		/*
		 * @param menuItems Array of MenuItem
		 */
		addPopupMenu : function(name, menuItems) {
			this.dom.addPopupMenu(name, menuItems);
		},

		// styles
		setStyles : function(styles) {
			this.dom.setStyles(styles);
		},
		getStyles : function(region, all) {
			all == (arguments.length > 1) ? all : true;
			var s = this.dom.getStyles(region, all);
			var obj = JSON.parse(s);
			return obj;
		},
		clearStyles : function(region) {
			this.dom.clearStyles(region);
		},

		// cell index
		getCurrent : function() {
			var current = this.dom.getCurrent();
			return current;
		},
		setCurrent : function(current) {
			this.dom.setCurrent(current);
		},

		// editing
		// 선택 영역 리턴
		getSelection : function() {
			return this.dom.getSelection();
		},
		// maxRows: -1이면 모든 행
		getSelectionData : function(maxRows) {
			return this.dom.getSelectionData(arguments.length ? maxRows : -1);
		},
		deleteSelection : function(force) {
			this.dom.deleteSelection(arguments.length ? force : false);
		},

		// utilities
		search : function(options) {
			return this.dom.search(options);
		},
		/*
		saveToExcel : function(options) {
			this.dom.saveToExcel(options);
		},
		uploadToExcel : function(options) {
			this.dom.uploadToExcel(options);
		},
		*/
		exportGrid : function(options) {
			this.dom.exportGrid(options);
		},
		showBusyIndicator : function() {
			this.dom.showBusyIndicator();
		},
		hideBusyIndicator : function() {
			this.dom.hideBusyIndicator();
		}
	};

	/**
	 * GridView
	 */
	function GridView(id, ignoreVersion) {
		this.base = GridBase;
		this.base(id, ignoreVersion);
		
		// events
		this.onCurrentChanging = function(grid, oldIndex, newIndex) {
			TRACE && win.console && console.log("onCurrentChanging: " + "(" + oldIndex.itemIndex + ", " + oldIndex.column + ") => ("	+ newIndex.itemIndex + ", " + newIndex.column + ")");
			return true;
		};
		this.onCurrentChanged = function(grid, newIndex) {
			TRACE && win.console && console.log("onCurrentChanged: " + "(" + newIndex.itemIndex + ", " + newIndex.column + ")");
		};
		this.onSelectionAdded = function(grid, selection) {
			TRACE && win.console && console.log("onSelectionAdded" + selection.startItem + "," + selection.startColumn + " : " + selection.endItem + "," + selection.endColumn);
		};
		this.onSelectionChanged = function(grid) {
			TRACE && win.console && console.log("onSelectionChanged");
		};
		this.onColumnHeaderClicked = function(grid, column) {
			TRACE && win.console && console.log("onColumnHeaderClicked: " + "(" + column.name + ")");
		}
		this.onCellButtonClicked = function(grid, itemIndex, column) {
			TRACE && win.console && console.log("onCellButtonClicked: " + "(" + itemIndex + ", " + column.fieldName + ")");
		};
		// 삭제하지 못하게 하려면 메시지를 리턴한다.
		this.onRowsDeleting = function(grid, rows) {
			TRACE && win.console && console.log("onRowsDeleting:" + rows);
			return null;
		};
		// 추가하지 못하게 하려면 메시지를 리턴한다.
		this.onRowInserting = function(grid, itemIndex) {
			TRACE && win.console && console.log("onRowInserting:" + itemIndex);
		};
		// 문제가 있으면 ValidationResult 리턴. 문제 없으면 null 리턴.
		this.onValidateColumn = function(grid, column, inserting, value) {
			TRACE && win.console && console.log("onValidateColumn:" + column.fieldName + "," + inserting + "," + value);
			return null;
		};
		// 문제가 있으면 ValidationResult 리턴. 문제 없으면 null 리턴.
		this.onValidateRow = function(grid, itemIndex, dataRow, inserting, values) {
			TRACE && win.console && console.log("onValidateRow:" + itemIndex + "," + dataRow + "," + inserting + "," + values);
			return null;
		};
		this.onScrollToBottom = function(grid) {
			TRACE && win.console && console.log("onScrollToBottom");
		};
		this.onMenuItemClicked = function(grid, data) {
			TRACE && win.console && console.log("onMenuItemClick: " + data);
		};
		this.onPageChanging = function(grid, newPage) {
			TRACE && win.console && console.log("onPageChanging: " + newPage);
			return true;
		};
		this.onPageChanged = function(grid, page) {
			TRACE && win.console && console.log("onPageChanged: " + page);
		};
	}
	GridView.prototype = new GridBase(null, true); // GridBase.prototype;
	
	GridView.prototype.setPaging = function(paging, pageSize, pageCount) {
		pageSize  = arguments.length > 1 ? pageSize : 10;
		pageCount = arguments.length > 2 ? pageCount : -1;
		this.dom.setPaging(paging, pageSize, pageCount);
	};
	GridView.prototype.getPage = function() {
		return this.dom.getPage();
	};
	GridView.prototype.setPage = function(page, startRow) {
		startRow  = arguments.length > 1 ? startRow : -1;
		this.dom.setPage(page, startRow);
	};
	GridView.prototype.getPageCount = function() {
		return this.dom.getPageCount();
	};
	GridView.prototype.setPageCount = function(pageCount) {
		return this.dom.setPageCount(pageCount);
	};

	/**
	 * TreeOptions
	 */
	function TreeOptions() {
		this.expanderWidth = 17;
		this.iconImages = undefined;
		// 크기를 지정하지 않거나 0이하로 지정하면 아이콘 크기대로 표시.
		this.iconWidth = 0;
	}

	/**
	 * TreeView
	 */
	function TreeView(id, ignoreVersion) {
		this.base = GridBase;
		this.base(id, ignoreVersion);

		// events
		this.onTreeItemExpanding = function(tree, itemIndex, rowId) {
			return true;
		}
	}
	TreeView.prototype = new GridBase(null, true); // GridBase.prototype;
	TreeView.prototype.setTreeOptions = function(options) {
		this.dom.setTreeOptions(options);
	};
	TreeView.prototype.expandAll = function() {
		this.dom.expandAll();
	};
	TreeView.prototype.collapseAll = function() {
		this.dom.collapseAll();
	};

	return {
		/*
		 * internal members
		 */
		getRealGridLic : function() {
			return realGridLic;
		},
		compareDataValue : function(id, comparerId, field, value1, value2) {
			var grid = __grids[id];
			if (grid && grid.dataProvider) {
				var comparer = grid.dataProvider.getComparer(comparerId);
				return comparer(field, value1, value2);
			}
			return 0;
		},

		// global events
		onload : function(id, scope) {
			alert("RealGridPlus loaded: " + id);
		},

		// utilities
		alert : function(message) {
			setTimeout(function() {
				win.alert(message);
			}, 1);
		},

		// data provider events
		onDataLoadCompleted : function(id) {
			var grid = __grids[id];
			if (grid && grid.dataProvider && grid.dataProvider.onLoadCompleted) {
				return grid.dataProvider.onLoadCompleted(grid.dataProvider);
			}
		},
		onDataLoadFailed : function(id, message) {
			var grid = __grids[id];
			if (grid && grid.dataProvider && grid.dataProvider.onLoadFailed) {
				return grid.dataProvider.onLoadFailed(grid.dataProvider, message);
			}
		},
		onDataRowInserting : function(id, row) {
			var grid = __grids[id];
			if (grid && grid.dataProvider && grid.dataProvider.onRowInserting) {
				return grid.dataProvider.onRowInserting(grid.dataProvider, row);
			}
		},
		onDataRowInserted : function(id, row) {
			var grid = __grids[id];
			if (grid && grid.dataProvider && grid.dataProvider.onRowInserted) {
				grid.dataProvider.onRowInserted(grid.dataProvider, row);
			}
		},
		onDataRowsDeleted : function(id, rows) {
			var grid = __grids[id];
			if (grid && grid.dataProvider && grid.dataProvider.onRowsDeleted) {
				grid.dataProvider.onRowsDeleted(grid.dataSource, rows);
			}
		},
		onDataRowCountChanged : function(id, count) {
			var grid = __grids[id];
			if (grid && grid.dataProvider && grid.dataProvider.onRowCountChanged) {
				grid.dataProvider.onRowCountChanged(grid.dataSource, count);
			}
		},

		// grid view events
		onMenuItemClicked : function(id, data) {
			var grid = __grids[id];
			if (grid && grid.onValidateRow) {
				grid.onMenuItemClicked(grid, data);
			}
		},
		onCurrentChanging : function(id, oldIndex, newIndex) {
			var grid = __grids[id];
			if (grid && grid.onCurrentChanging) {
				var rslt = grid.onCurrentChanging(grid, oldIndex, newIndex);
				return rslt;
			}
			return true;
		},
		onCurrentChanged : function(id, newIndex) {
			var grid = __grids[id];
			if (grid && grid.onCurrentChanged) {
				grid.onCurrentChanged(grid, newIndex);
			}
		},
		onSelectionAdded : function(id, selection) {
			var grid = __grids[id];
			if (grid && grid.onSelectionAdded) {
				grid.onSelectionAdded(grid, selection);
			}
		},
		onSelectionChanged : function(id) {
			var grid = __grids[id];
			if (grid && grid.onSelectionChanged) {
				grid.onSelectionChanged(grid);
			}
		},
		onColumnHeaderClicked : function(id, column) {
			var grid = __grids[id];
			if (grid && grid.onColumnHeaderClicked) {
				grid.onColumnHeaderClicked(grid, column);
			}
		},
		onCellButtonClicked : function(id, itemIndex, column) {
			var grid = __grids[id];
			if (grid && grid.onCellButtonClicked) {
				grid.onCellButtonClicked(grid, itemIndex, column);
			}
		},
		onRowsDeleting : function(id, rows) {
			var grid = __grids[id];
			if (grid) {
				if (grid.onRowsDeleting) {
					return grid.onRowsDeleting(grid, rows);
				} else {
					return null;
				}
			}
		},
		onRowInserting : function(id, itemIndex) {
			var grid = __grids[id];
			if (grid && grid.onRowInserting) {
				return grid.onRowInserting(grid, itemIndex);
			}
		},
		onValidateColumn : function(id, column, inserting, value) {
			var grid = __grids[id];
			if (grid && grid.onValidateColumn) {
				return grid.onValidateColumn(grid, column, inserting, value);
			} else {
				return null;
			}
		},
		onValidateRow : function(id, itemIndex, dataRow, inserting, values) {
			var grid = __grids[id];
			if (grid && grid.onValidateRow) {
				return grid.onValidateRow(grid, itemIndex, dataRow, inserting, values);
			} else {
				return null;
			}
		},
		onScrollToBottom : function(id) {
			var grid = __grids[id];
			if (grid && grid.onScrollToBottom) {
				grid.onScrollToBottom(grid);
			}
		},
		onPageChanging : function(id, newPage) {
			var grid = __grids[id];
			if (grid && grid.onPageChanging) {
				var v = grid.onPageChanging(grid, newPage);
				return (v == false) ? false : true;
			}
		},
		onPageChanged : function(id, page) {
			var grid = __grids[id];
			if (grid && grid.onPageChanged) {
				grid.onPageChanged(grid, page);
			}
		},
		onPageCountChanged : function(id, pageCount) {
			var grid = __grids[id];
			if (grid && grid.onPageCountChanged) {
				grid.onPageCountChanged(grid, pageCount);
			}
		},
		
		// TreeView
		// false를 리턴하면 expanding 취소.
		onTreeItemExpanding : function(id, itemIndex, rowId) {
			var grid = __grids[id];
			if (grid && grid.onTreeItemExpanding) {
				return grid.onTreeItemExpanding(grid, itemIndex, rowId);
			} else {
				return true;
			}
		},

		/*
		 * public api
		 */
		DataType : DataType,
		RowState : RowState,
		DataField : DataField,
		DataLoadOptions : DataLoadOptions,
		LocalDataProvider : LocalDataProvider,
		TreeDataProvider : TreeDataProvider,

		SummaryMode : SummaryMode,
		Alignment : Alignment,
		ContentFit : ContentFit,
		IconLocation : IconLocation,
		SearchOptions : SearchOptions,
		ValidationMode : ValidationMode,
		ValidationLevel : ValidationLevel,
		CellButton : CellButton,
		GridFitStyle : GridFitStyle,
		SortStyle : SortStyle,
		SortDirection : SortDirection,
		SelectionStyle : SelectionStyle,
		ColumnGroupOrientation : ColumnGroupOrientation,
		RowGroupAdornments : RowGroupAdornments,
		IndicatorValue : IndicatorValue,

		CellIndex : CellIndex,
		ImageList : ImageList,
		EditValidation : EditValidation,
		DynamicStyle : DynamicStyle,
		CellRenderer : CellRenderer,
		BarCellRenderer : BarCellRenderer,
		CheckCellRenderer : CheckCellRenderer,
		ImageCellRenderer : ImageCellRenderer,
		IconCellRenderer : IconCellRenderer,
		ShapeCellRenderer : ShapeCellRenderer,
		SignalCellRenderer : SignalCellRenderer,
		CellEditor : CellEditor,
		LineCellEditor : LineCellEditor,
		MultiLineCellEditor : MultiLineCellEditor,
		DropDownCellEditor : DropDownCellEditor,
		NumberCellEditor : NumberCellEditor,
		DateCellEditor : DateCellEditor,
		ColumnHeader : ColumnHeader,
		ColumnHeader : ColumnHeader,
		DataColumn : DataColumn,
		ColumnGroup : ColumnGroup,

		GridOptions : GridOptions,
		DisplayOptions : DisplayOptions,
		EditOptions : EditOptions,
		PanelOptions : PanelOptions,
		FixedOptions : FixedOptions,
		RowGroupOptions : RowGroupOptions,
		SelectOptions : SelectOptions,
		SortingOptions : SortingOptions,
		FilteringOptions : FilteringOptions,
		GridViewStyles : GridViewStyles,
		GridView : GridView,
		TreeView : TreeView
	};
})();

