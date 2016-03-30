json.items do |json|
	json.array!(@collection) do |diy_grid|
json.(diy_grid, :id,:domain_id,:name,:description,:category,:config,:fields,:columns,:creator_id,:updater_id,:created_at,:updated_at)

		json.updater do
			json.id diy_grid.updater_id
			json.name diy_grid.updater ? diy_grid.updater.name : ''
		end
	end
end
json.total @total_count
json.success true
