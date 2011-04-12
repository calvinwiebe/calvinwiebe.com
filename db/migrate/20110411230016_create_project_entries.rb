class CreateProjectEntries < ActiveRecord::Migration
  def self.up
    create_table :project_entries do |t|
      t.string :name
      t.string :technologies
      t.string :description
      t.string :comments

      t.timestamps
    end
  end

  def self.down
    drop_table :project_entries
  end
end
