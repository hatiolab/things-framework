json.items do |json|
	json.array!(@collection) do |diy_service|
  	json.(diy_service, :id, :name, :description, :lang_type, :script_type, :active_flag, :service_logic, :atomic_flag, :diy_form_id, diy_grid_id, :updated_at)
		
		json.diy_form diy_service.diy_form, :id, :name if diy_service.diy_form
		json.diy_grid diy_service.diy_grid, :id, :name if diy_service.diy_grid
		json.updater diy_service.updater, :id, :name if diy_service.updater
	end
end

json.total @total_count