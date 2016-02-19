class AlarmsController < ResourceMultiUpdateController
  
private
  def resource_params
    [ params.require(:alarm).permit(:name,:category,:description,:title,:alarm_type,:receivers,:lang_type,:template,:logic) ]
  end
end
