class CreateCommonCodeDetails < ActiveRecord::Migration

	def  self.up
		create_table :common_code_details do |t|
			t.string :name, :null => false, :limit => 64
			t.string :description, :limit => 255
			t.references :parent
			t.string :data_1, :limit => 255
			t.string :data_2, :limit => 255
			t.string :data_3, :limit => 255
			t.string :data_4, :limit => 255
			t.string :data_5, :limit => 255
			t.userstamps
			t.timestamps
		end

		add_index :common_code_details, [:parent_id, :name], :unique => true, :name => :ix_code_details_0
		add_index :common_code_details, [:parent_id], :name => :ix_code_details_1
	end

	def  self.down
		remove_index :common_code_details, :name => :ix_code_details_0
		remove_index :common_code_details, :name => :ix_code_details_1
		
		drop_table :common_code_details
	end
end