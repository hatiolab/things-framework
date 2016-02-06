class RestsController < ResourceMultiUpdateController
  
private
  def resource_params
    [ params.require(:rest).permit(:name,:module,:description,:bean_class_name) ]
  end
end
