json.(@diy_template, :id,:domain_id,:name,:description,:template,:logic,:created_at,:updated_at)

json.creator @diy_template.creator, :id, :name if @diy_template.creator
json.updater @diy_template.updater, :id, :name if @diy_template.updater