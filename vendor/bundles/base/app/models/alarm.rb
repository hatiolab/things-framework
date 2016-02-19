class Alarm < ActiveRecord::Base

	include Multitenant

	include Attachable

	include PropertyKeepable

	stampable

	strip_cols [:name]

	validates_presence_of :name,:alarm_type, :strict => true

	validates :name, length: { maximum: 64 }, :strict => true

	validates :category, length: { maximum: 20 }, :strict => true

	validates :description, length: { maximum: 255 }, :strict => true

	validates :title, length: { maximum: 255 }, :strict => true

	validates :alarm_type, length: { maximum: 20 }, :strict => true

	validates :receivers, length: { maximum: 1000 }, :strict => true

	validates :lang_type, length: { maximum: 15 }, :strict => true

	validates_uniqueness_of :name, :strict => true, :scope => [:domain_id]


end
