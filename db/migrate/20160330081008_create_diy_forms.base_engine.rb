# This migration comes from base_engine (originally 20160330081001)
class CreateDiyForms < ActiveRecord::Migration

	def change
		create_table :diy_forms  do |t|
			t.references :domain, :null => false
			t.string :name, :null => false, :limit => 64
			t.string :description, :limit => 255
			t.string :category, :limit => 20
			t.string :title, :null => false, :limit => 64
			t.string :url, :null => false, :limit => 128
			t.string :layout, :limit => 30
			t.string :selects, :limit => 255
			t.string :removes, :limit => 255
			t.string :searchs, :limit => 4000
			t.string :sorts, :limit => 128
			t.text :details
			t.userstamps
			t.timestamps
		end

		add_index :diy_forms, [:domain_id,:name], :unique => true, :name => :ix_diy_forms_0
		add_index :diy_forms, [:domain_id, :updated_at], :name => :ix_diy_forms_1
	end

end
