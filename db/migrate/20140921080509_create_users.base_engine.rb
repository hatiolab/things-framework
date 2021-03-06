# This migration comes from base_engine (originally 20130419014535)
class CreateUsers < ActiveRecord::Migration
  def self.up
    create_table :users do |t|
      t.string :login, :null => false
      t.references :domain
      t.userstamps
      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end
