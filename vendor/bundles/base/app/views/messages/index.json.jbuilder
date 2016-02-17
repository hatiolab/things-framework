json.items do |json|
	json.array!(@collection) do |message|
json.(message, :id,:domain_id,:name,:locale,:display,:creator_id,:updater_id,:created_at,:updated_at)

		json.updater do
			json.id message.updater_id
			json.name message.updater ? message.updater.name : ''
		end
	end
end
json.total @total_count
json.success true
