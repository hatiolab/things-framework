json.items do |json|
	json.array!(@collection) do |diy_form|
json.(diy_form, :id,:domain_id,:name,:description,:category,:title,:url,:layout,:selects,:removes,:searchs,:sorts,:details,:creator_id,:updater_id,:created_at,:updated_at)
	end
end
json.total @total_count
json.success true
