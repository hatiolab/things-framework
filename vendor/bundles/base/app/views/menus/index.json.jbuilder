json.items do |json|
	json.array!(@collection) do |menu|
		json.(menu, :id, :name, :description, :parent_id, :template, :menu_type, :category, :rank, :icon_path, :hidden_flag, :routing, :routing_type, :diy_service_id, :updated_at)

		json.diy_service menu.diy_service, :id, :name if menu.diy_service
		json.updater menu.updater, :id, :name if menu.updater
	end
end

json.total @total_count
json.success true