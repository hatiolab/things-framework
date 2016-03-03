class CreateSettings < ActiveRecord::Migration
  def self.up
    create_table :settings do |t|
      t.references :domain, :null => false
      t.string :name, :limit => 64, :null => false
      t.string :description, :limit => 255, :null => false
      t.string :value, :limit => 2000
      t.timestamps
      t.userstamps
    end

    add_index :settings, [:domain_id,:name], :unique => true, :name => :ix_setting_0
    add_index :settings, [:domain_id, :updated_at], :name => :ix_setting_1    
  end

  def self.down
    drop_table :settings
  end
end