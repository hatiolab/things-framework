json.(@alarm, :id,:domain_id,:name,:category,:description,:title,:alarm_type,:receivers,:lang_type,:template,:logic,:created_at,:updated_at)

json.creator @alarm.creator, :id, :name if @alarm.creator
json.updater @alarm.updater, :id, :name if @alarm.updater