json.(@diy_form, :id,:domain_id,:name,:description,:category,:title,:url,:layout,:selects,:removes,:searchs,:sorts,:details,:created_at,:updated_at)

json.creator @diy_form.creator, :id, :name if @diy_form.creator
json.updater @diy_form.updater, :id, :name if @diy_form.updater