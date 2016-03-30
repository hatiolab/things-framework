class CreateDiyGrids < ActiveRecord::Migration

	def change
		create_table :diy_grids  do |t|
			t.references :domain, :null => false
			t.string :name, :null => false, :limit => 64
			t.string :description, :limit => 255
			t.string :category, :limit => 20
			t.text :config
			t.string :fields, :limit => 4000
			t.string :columns, :limit => 4000
			t.userstamps
			t.timestamps
		end

		add_index :diy_grids, [:domain_id,:name], :unique => true, :name => :ix_diy_grids_0
		add_index :diy_grids, [:domain_id, :updated_at], :name => :ix_diy_grids_1
	end

end
