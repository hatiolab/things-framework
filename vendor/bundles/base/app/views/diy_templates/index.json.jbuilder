json.items do |json|
	json.array!(@collection) do |diy_template|
json.(diy_template, :id,:domain_id,:name,:description,:template,:logic,:creator_id,:updater_id,:created_at,:updated_at)

		json.updater do
			json.id diy_template.updater_id
			json.name diy_template.updater ? diy_template.updater.name : ''
		end
	end
end
json.total @total_count
json.success true
