class DiyTemplatesController < ResourceMultiUpdateController
  
private
  def resource_params
    [ params.require(:diy_template).permit(:name,:description,:template,:logic) ]
  end
end
