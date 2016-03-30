class DiyForm < ActiveRecord::Base

	include Multitenant

	stampable

	strip_cols [:name]

	validates_presence_of :name,:title,:url, :strict => true

	validates :name, length: { maximum: 64 }, :strict => true

	validates :description, length: { maximum: 255 }, :strict => true

	validates :category, length: { maximum: 20 }, :strict => true

	validates :title, length: { maximum: 64 }, :strict => true

	validates :url, length: { maximum: 128 }, :strict => true

	validates :layout, length: { maximum: 30 }, :strict => true

	validates :selects, length: { maximum: 255 }, :strict => true

	validates :removes, length: { maximum: 255 }, :strict => true

	validates :searchs, length: { maximum: 4000 }, :strict => true

	validates :sorts, length: { maximum: 128 }, :strict => true

	validates_uniqueness_of :name, :strict => true, :scope => [:domain_id]


end
