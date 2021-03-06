Ext.define('Base.model.Attachment', {
    
	extend: 'Ext.data.Model',
    
	fields: [
		{ name : 'id', type : 'string' },
		{ name : 'name', type : 'string' },
		{ name : 'description', type : 'string' },
		{ name : 'storage_info_id', type : 'integer' },
		{ name : 'storage_info', type : 'auto' },
		{ name : 'path', type : 'auto', convert : function(value, record) {
            return (value && value.path) ? value.path.url : value;
        } },
		{ name : 'file_size', type : 'integer' },
		{ name : 'mimetype', type : 'string' },
		{ name : 'url', type : 'string' },
		{ name : 'on_type', type : 'string' },
		{ name : 'on_id', type : 'integer' },
		{ name : 'tag', type : 'string' },
		{ name : 'creator', type : 'auto' },
		{ name : 'updater', type : 'auto' },
		{ name : 'created_at', type : 'date' }, 
		{ name : 'updated_at', type : 'date' }, 
		{ name : 'cud_flag_', type : 'string' }
	],
	
  	proxy: {
		type: 'rest',
		url : 'attachments',
		format : 'json',
	    reader: {
			type: 'json'
        },
        writer: {
			type: 'json',
			root: 'attachment'
        }
	}
});