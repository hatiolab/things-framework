class DomainsController < InheritedResources::Base
  
  #
  # generate initial data
  #
  def setup
    domain = Domain.find(params[:id])
    result = { :success => true, :msg => 'Success' }
    
    if(domain)
      already_exist = domain.exist_initial_data
      if(already_exist)
        result = { :success => false, :msg => "#{domain.name} domain already has initial data!" }
      else
        begin
          domain.setup
        rescue Exception => err
          result = { :success => false, :msg => err.to_s }
        end
      end
    else
      result = { :success => false, :msg => "Domain (id - #{domain.id}) not found!" }
    end

    respond_to do |format|
      format.xml  { render :xml => result }
      format.json { render :json => result }
    end
  end

  def index
    @domains = Domain.all
    
    respond_to do |format|
      format.html
      format.xml  { render :xml => @domains }
      format.json { render :json => { :success => true, :total => @domains.size, :items => @domains } }
    end
  end
  
  def change
    @domains = Domain.all
    
    respond_to do |format|
      format.html
      format.xml  { render :xml => @domains }
      format.json { render :json => { :success => true, :total => @domains.size, :items => @domains } }
    end
  end
  
  def enter
    session[:current_domain_id] = params[:id]
        
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'Domain was successfully changed.' }
      format.json { render :json => { :success => true, :msg => 'Domain was successfully changed!' } }
    end
  end
  
  def new
    @edit_domain = Domain.new
  end

  def show
    @show_domain = Domain.find(params[:id])
    
    respond_to do |format|
      format.html
      format.xml  { render :xml => @show_domain }
      format.json { render :json => @show_domain }
    end
  end

  def edit
    @edit_domain = Domain.find(params[:id])
  end
  
  def update
    update_domain = Domain.find(params[:id])
    result = false
        
    if(params[:domain])
      result = update_domain.update_attributes(resource_params[0])
    else
      update_domain.name = params[:name]
      update_domain.description = params[:description]
      update_domain.timezone = params[:timezone]
      update_domain.system_flag = params[:system_flag]
      result = update_domain.save!
    end    

    respond_to do |format|
      if result
        format.html { redirect_to domains_path, notice: 'Domain was successfully updated.' }
        format.json { render :json => update_domain }
      else
        format.html { render action: "edit" }
        format.json { render json: update_domain.errors, status: :unprocessable_entity }
      end
    end
  end
  
  def create    
    create_domain = nil
    if(params[:domain])
      create_domain = Domain.new(params[:domain])
    else
      create_domain = Domain.new      
      create_domain.name = params[:name]
      create_domain.description = params[:description]
      create_domain.timezone = params[:timezone]
      create_domain.system_flag = params[:system_flag]      
    end
      
    respond_to do |format|
      if create_domain.save
        format.html { redirect_to domains_path, notice: 'Domain was successfully created.' }
        format.json { render :json => {:success => true, :msg => 'Domain was successfully created!', :item => create_domain} }
      else
        format.html { render action: "new" }
        format.json { render json: create_domain.errors, status: :unprocessable_entity }
      end
    end
  end
  
  def destroy
    domain = Domain.find(params[:id])
    domain.destroy
    
    respond_to do |format|
      format.html { redirect_to domains_path, notice: 'Domain was successfully destroyed!' }
      format.json { render :json => {:success => true, :msg => 'Domain was successfully destroyed!'} }
    end
  end
  
  def update_multiple
    data_list = JSON.parse params['_json']
    delete_list, update_list, create_list = [], [], [];

    data_list.each do |data|
      cud_flag = data.delete('cud_flag_')
      if(cud_flag == "d")
        delete_list << data['id']
      elsif(cud_flag == "u")
        update_list << data
      elsif(cud_flag == "c")
        create_list << data
      end
    end
          
    # 1. delete
    Domain.destroy(delete_list) unless delete_list.empty?

    # 2. update
    update_list.each do |data|
      domain = Domain.find(data.delete('id'))
      if domain
        data.delete('creator_id')
        data.delete('created_at')
        data.delete('updater_id')
        data.delete('updated_at')
        domain.update_attributes(data)
      end
    end if update_list

    # 3. create
    create_list.each do |data|
      data.delete('id')
      data.delete('creator_id')
      data.delete('created_at')
      data.delete('updater_id')
      data.delete('updated_at')        
      Domain.create!(data)
    end if create_list
  end
  
private
  def resource_params
    [ params.require(:domain).permit(:name, :description, :timezone, :system_flag, :lat, :lng) ]
  end
end
