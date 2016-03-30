class DiyGridsController < ResourceMultiUpdateController
  
private
  def resource_params
    [ params.require(:diy_grid).permit(:name,:description,:category,:config,:fields,:columns) ]
  end
end
