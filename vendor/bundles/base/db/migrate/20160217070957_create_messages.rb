class CreateMessages < ActiveRecord::Migration

	def change
		create_table :messages  do |t|
			t.references :domain, :null => false
			t.string :name, :null => false, :limit => 255
			t.string :locale, :null => false, :limit => 15
			t.string :display, :null => false, :limit => 1000
			t.userstamps
			t.timestamps
		end

		add_index :messages, [:domain_id,:name,:locale], :unique => true, :name => :ix_messages_0
		add_index :messages, [:domain_id, :updated_at], :name => :ix_messages_1
	end

end
