# This migration comes from base_engine (originally 20130420014034)
class CreateGroupLabels < ActiveRecord::Migration
  def	self.up
    create_table :group_labels do |t|
      t.integer :label_id, :null => false
			t.integer :label_group_id, :null => false
    end

    add_index :group_labels, [:label_id, :label_group_id], :name => :ix_group_labels_0, :unique => true
    add_index :group_labels, [:label_group_id, :label_id], :name => :ix_group_labels_1    
  end

  def self.down
    remove_index :group_labels, :name => :ix_group_labels_0
    remove_index :group_labels, :name => :ix_group_labels_1
    
    drop_table :group_labels
  end
end