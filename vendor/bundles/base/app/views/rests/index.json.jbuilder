json.items do |json|
	json.array!(@collection) do |rest|
json.(rest, :id,:domain_id,:name,:module,:description,:bean_class_name,:creator_id,:created_at,:updater_id,:updated_at)
	end
end
json.total @total_count
json.success true
