json.items do |json|
	json.array!(@collection) do |storage_info|
json.(storage_info, :id,:created_at,:creator_id,:domain_id,:updated_at,:updater_id,:description,:name,:path)
	end
end
json.total @total_count
json.success true
