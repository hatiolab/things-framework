# This migration comes from base_engine (originally 20160206034803)
class CreateRests < ActiveRecord::Migration

	def change
		create_table :rests  do |t|
			t.references :domain, :null => false
			t.string :name, :null => false, :limit => 64
			t.string :module, :null => false, :limit => 12
			t.string :description, :limit => 255
			t.string :bean_class_name, :null => false, :limit => 64
			t.userstamps
			t.timestamps
		end

		add_index :rests, [:name], :unique => true, :name => :ix_rest_0
		add_index :rests, [:domain_id, :updated_at], :name => :ix_rest_1
	end

end
