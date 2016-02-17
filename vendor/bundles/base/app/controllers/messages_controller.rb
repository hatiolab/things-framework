class MessagesController < ResourceMultiUpdateController
  
private
  def resource_params
    [ params.require(:message).permit(:name,:locale,:display) ]
  end
end
