class AddDescriptionToProjectEntries < ActiveRecord::Migration
  def self.up
    add_column :project_entries, :description, :text
  end

  def self.down
    remove_column :project_entries, :description
  end
end
