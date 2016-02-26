class CreateAttachments < ActiveRecord::Migration
  def	change
    create_table :attachments  do |t|
      t.references :domain, :null => false
      t.string :name, :null => false, :limit => 64
      t.string :description, :limit => 255
      t.references :storage_info
      t.string :mimetype, :limit => 10
      t.integer :file_size
      t.string :path, :limit => 2000
      t.references :on, :polymorphic => true
      t.string :tag, :limit => 2000
      t.userstamps
      t.timestamps
    end
    
		add_index :attachments, [:domain_id, :on_type, :on_id, :tag, :name], :unique => true, :name => :ix_attach_0
    add_index :attachments, [:domain_id, :storage_info_id], :name => :ix_attach_1
    add_index :attachments, [:domain_id, :tag], :name => :ix_attach_2
  end
end
