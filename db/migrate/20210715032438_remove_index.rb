class RemoveIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :responses, :author_id 
    remove_index :responses, :story_id
  end
end
