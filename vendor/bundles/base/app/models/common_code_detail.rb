class CommonCodeDetail < ActiveRecord::Base
  
  belongs_to :common_code
  
  validates_presence_of :name, :strict => true
  validates :name, length: { maximum: 60 }, :strict => true
  validates :description, length: { maximum: 255 }, :strict => true
  validates_uniqueness_of :name, :strict => true, :scope => [:parent_id]
  
  
end
