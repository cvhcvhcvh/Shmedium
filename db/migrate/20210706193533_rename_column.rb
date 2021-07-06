class RenameColumn < ActiveRecord::Migration[5.2]
  def change
    remove_index :users, :full_name
    rename_column :users, :full_name, :username
    
  end
end

