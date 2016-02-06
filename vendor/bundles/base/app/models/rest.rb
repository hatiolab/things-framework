class Rest < ActiveRecord::Base

	include Multitenant

	stampable

	validates_presence_of :name,:module,:bean_class_name, :strict => true

	validates :name, length: { maximum: 64 }, :strict => true

	validates :module, length: { maximum: 12 }, :strict => true

	validates :description, length: { maximum: 255 }, :strict => true

	validates :bean_class_name, length: { maximum: 64 }, :strict => true

	validates_uniqueness_of :name, :strict => true
end
