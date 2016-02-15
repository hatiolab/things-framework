class StorageInfo < ActiveRecord::Base

	include Multitenant

	stampable

	validates_presence_of :description,:name,:path, :strict => true

	validates :description, length: { maximum: 255 }, :strict => true

	validates :name, length: { maximum: 62 }, :strict => true

	validates :path, length: { maximum: 255 }, :strict => true


end
