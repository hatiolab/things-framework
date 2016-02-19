json.items do |json|
	json.array!(@collection) do |alarm|
json.(alarm, :id,:domain_id,:name,:category,:description,:title,:alarm_type,:receivers,:lang_type,:template,:logic,:creator_id,:updater_id,:created_at,:updated_at)
	end
end
json.total @total_count
json.success true
