class Message < ActiveRecord::Base

	include Multitenant

	stampable

	strip_cols [:name]

	validates_presence_of :name,:locale,:display, :strict => true

	validates :name, length: { maximum: 255 }, :strict => true

	validates :locale, length: { maximum: 15 }, :strict => true

	validates :display, length: { maximum: 1000 }, :strict => true

	validates_uniqueness_of :locale, :strict => true, :scope => [:domain_id,:name]


end
