class CreateDiyTemplates < ActiveRecord::Migration

	def change
		create_table :diy_templates  do |t|
			t.references :domain, :null => false
			t.string :name, :null => false, :limit => 64
			t.string :description, :limit => 255
			t.text :template
			t.text :logic
			t.userstamps
			t.timestamps
		end

		add_index :diy_templates, [:domain_id,:name], :unique => true, :name => :ix_diy_templates_0
		add_index :diy_templates, [:domain_id, :updated_at], :name => :ix_diy_templates_1
	end

end
