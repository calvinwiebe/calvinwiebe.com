class RemoveDutiesFromExperienceEntries < ActiveRecord::Migration
  def self.up
    remove_column :experience_entries, :duties
  end

  def self.down
    add_column :experience_entries, :duties, :string
  end
end
