class StorageInfosController < ResourceMultiUpdateController
  
private
  def resource_params
    [ params.require(:storage_info).permit(:description,:name,:path) ]
  end
end
