json.(@message, :id,:domain_id,:name,:locale,:display,:created_at,:updated_at)

json.creator @message.creator, :id, :name if @message.creator
json.updater @message.updater, :id, :name if @message.updater