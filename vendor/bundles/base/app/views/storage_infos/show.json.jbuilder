json.(@storage_info, :id,:created_at,:domain_id,:updated_at,:description,:name,:path)

json.creator @storage_info.creator, :id, :name if @storage_info.creator
json.updater @storage_info.updater, :id, :name if @storage_info.updater