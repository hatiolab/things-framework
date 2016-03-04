# This migration comes from base_engine (originally 20160204054215)
class CreateLabels < ActiveRecord::Migration

	def change
		create_table :labels  do |t|
			t.references :domain, :null => false
			t.integer :version, :null => false
			t.string :name, :null => false, :limit => 64
			t.references :label_group
			t.integer :owner_id, :null => false
			t.string :description, :limit => 255
			t.string :tags, :limit => 255
			t.string :status, :null => false, :limit => 15
			t.text :thumbnail
			t.boolean :latest_released
			t.boolean :latest_editing
			t.text :command
			t.text :model
			t.userstamps
			t.timestamps
			t.datetime :printed_at
		end

		add_index :labels, [:domain_id, :name, :version], :unique => true, :name => :ix_label_0
		add_index :labels, [:domain_id, :status], :name => :ix_label_1
		add_index :labels, [:domain_id, :owner_id], :name => :ix_label_2
		add_index :labels, [:domain_id, :label_group_id], :name => :ix_label_3
	end

end
