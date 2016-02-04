Ext.define('Frx.mixin.Map', function() {

	/**
	 * default lat
	 */
	function defaultLat() {
		return DEFAULT_LAT;
	}
	
	/**
	 * default lng
	 */
	function defaultLng() {
		return DEFAULT_LNG;
	}

	return {
		defaultLat : defaultLat,
		defaultLng : defaultLng
	};
}());
