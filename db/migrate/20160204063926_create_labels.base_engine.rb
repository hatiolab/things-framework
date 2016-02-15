# This migration comes from base_engine (originally 20160204054215)
class CreateLabels < ActiveRecord::Migration

	def change
		create_table :labels  do |t|
			t.references :domain, :null => false
			t.boolean :latest_released
			t.text :command
			t.string :description, :limit => 255
			t.text :img
			t.text :model
			t.string :name, :null => false, :limit => 64
			t.integer :owner_id, :null => false
			t.string :status, :null => false, :limit => 15
			t.integer :version, :null => false
			t.boolean :latest_editing
			t.userstamps
			t.timestamps
		end

		add_index :labels, [:domain_id,:name,:version], :unique => true, :name => :ix_labels_0
		add_index :labels, [:domain_id, :status], :name => :ix_labels_1
		add_index :labels, [:domain_id, :owner_id], :name => :ix_labels_2
	end

end
