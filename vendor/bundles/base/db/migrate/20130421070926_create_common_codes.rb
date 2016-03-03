class CreateCommonCodes < ActiveRecord::Migration

	def  self.up
		create_table :common_codes do |t|
			t.references :domain, :null => false
			t.string :name, :null => false, :limit => 64
			t.string :description, :limit => 255
			t.references :parent
			t.string :code1, :limit => 255
			t.string :code2, :limit => 255
			t.string :code3, :limit => 255
			t.string :code4, :limit => 255
			t.string :code5, :limit => 255
			t.userstamps
			t.timestamps
		end

		add_index :common_codes, [:domain_id, :parent_id, :name], :unique => true, :name => :ix_code_0
		add_index :common_codes, [:domain_id, :parent_id], :name => :ix_code_1
	end

	def  self.down
		remove_index :common_codes, :name => :ix_code_0
		remove_index :common_codes, :name => :ix_code_1
		
		drop_table :common_codes
	end
end