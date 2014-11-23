class CreateArticles < ActiveRecord::Migration
  def change
    create_table :articles do |t|
      t.string :title
      t.string :source
      t.string :brief
      t.text :content

      t.timestamps
    end
  end
end
