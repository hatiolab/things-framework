json.items do |json|
	json.array!(@users) do |user|
		json.(user, :id, :login, :name, :email, :admin_flag, :domain_id, :locale, :timezone, :password, :operator_flag, :active_flag)

		json.domain user.domain, :id, :name if user.domain
		json.updated_at user.updated_at
		json.updater user.updater, :id, :name if user.updater
	end
end

json.success true
json.total @total_count