class DiyFormsController < ResourceMultiUpdateController
  
private
  def resource_params
    [ params.require(:diy_form).permit(:name,:description,:category,:title,:url,:layout,:selects,:removes,:searchs,:sorts,:details) ]
  end
end
