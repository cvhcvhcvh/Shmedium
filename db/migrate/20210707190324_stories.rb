class Stories < ActiveRecord::Migration[5.2]
  def change
    create_table :stories do |t|
      t.string :title, null: false
      t.string :body, null: false
      t.integer :author_id, null: false
    end
    add_index :stories, :author_id
  end
end
