class CreateStorageInfos < ActiveRecord::Migration

	def change
		create_table :storage_infos  do |t|
			t.references :domain, :null => false
			t.string :description, :null => false, :limit => 255
			t.string :name, :null => false, :limit => 62
			t.string :rule, :limit => 20
			t.string :path, :null => false, :limit => 255
			t.userstamps
			t.timestamps
		end

		add_index :storage_infos, [:domain_id, :updated_at], :name => :ix_storage_info_0
	end

end
