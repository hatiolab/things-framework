json.(@diy_service, :id, :name, :description, :lang_type, :script_type, :active_flag, :service_logic, :atomic_flag, :diy_form_id, :diy_grid_id, :created_at, :updated_at)

json.diy_form @diy_service.diy_form, :id, :name if @diy_service.diy_form
json.diy_grid @diy_service.diy_grid, :id, :name if @diy_service.diy_grid

json.updater @diy_service.updater, :id, :name if @diy_service.updater
json.creator @diy_service.creator, :id, :name if @diy_service.creator

json.service_in_params @diy_service.service_in_params, :id, :resource_type, :resource_id, :name, :description, :rank
json.service_out_params @diy_service.service_out_params, :id, :resource_type, :resource_id, :name, :description, :rank
