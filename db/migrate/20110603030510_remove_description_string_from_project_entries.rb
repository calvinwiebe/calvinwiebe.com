class RemoveDescriptionStringFromProjectEntries < ActiveRecord::Migration
  def self.up
    remove_column :project_entries, :description
  end

  def self.down
    add_column :project_entries, :description, :string
  end
end
