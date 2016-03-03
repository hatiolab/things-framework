class CreateAlarms < ActiveRecord::Migration

	def change
		create_table :alarms  do |t|
			t.references :domain, :null => false
			t.string :name, :null => false, :limit => 64
			t.string :category, :limit => 20
			t.string :description, :limit => 255
			t.string :title, :limit => 255
			t.string :alarm_type, :null => false, :limit => 20
			t.string :lang_type, :limit => 15
			t.string :receivers, :limit => 1000
			t.text :template
			t.text :logic
			t.userstamps
			t.timestamps
		end

		add_index :alarms, [:domain_id,:name], :unique => true, :name => :ix_alarm_0
		add_index :alarms, [:domain_id, :updated_at], :name => :ix_alarm_1
	end

end
