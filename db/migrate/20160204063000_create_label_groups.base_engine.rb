# This migration comes from base_engine (originally 20160204054215)
class CreateLabelGroups < ActiveRecord::Migration

	def change
		create_table :label_groups  do |t|
			t.references :domain, :null => false
			t.string :name, :null => false, :limit => 64
			t.string :description, :limit => 255
			t.userstamps
			t.timestamps
		end

		add_index :label_groups, [:domain_id, :name], :unique => true, :name => :ix_label_group_0
	end

end
