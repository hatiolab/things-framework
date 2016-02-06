json.(@rest, :id,:domain_id,:name,:module,:description,:bean_class_name,:created_at,:updated_at)

json.creator @rest.creator, :id, :name if @rest.creator
json.updater @rest.updater, :id, :name if @rest.updater