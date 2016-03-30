class DiyGrid < ActiveRecord::Base

	include Multitenant

	stampable

	strip_cols [:name]

	validates_presence_of :name, :strict => true

	validates :name, length: { maximum: 64 }, :strict => true

	validates :description, length: { maximum: 255 }, :strict => true

	validates :category, length: { maximum: 20 }, :strict => true

	validates :fields, length: { maximum: 4000 }, :strict => true

	validates :columns, length: { maximum: 4000 }, :strict => true

	validates_uniqueness_of :name, :strict => true, :scope => [:domain_id]


end
