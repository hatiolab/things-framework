json.(@user, :id, :login, :name, :email, :admin_flag, :locale, :timezone, :password, :operator_flag, :active_flag)

json.domain @user.domain, :id, :name if @user.domain
json.updater @user.updater, :id, :name if @user.updater
json.creator @user.creator, :id, :name if @user.creator
