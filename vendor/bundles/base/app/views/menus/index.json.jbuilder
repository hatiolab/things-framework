json.items do |json|
	json.array!(@collection) do |menu|
		json.(menu, :id, :name, :description, :parent_id, :template, :menu_type, :category, :rank, :icon_path, :hidden_flag, :routing, :routing_type, :diy_form_id, :diy_grid_id)

		json.diy_form menu.diy_form, :id, :name if menu.diy_form
		json.diy_grid menu.diy_grid, :id, :name if menu.diy_grid

		json.updated_at menu.updated_at
		json.updater menu.updater, :id, :name if menu.updater
	end
end

json.total @total_count
json.success true