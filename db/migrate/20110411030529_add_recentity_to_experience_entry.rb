class AddRecentityToExperienceEntry < ActiveRecord::Migration
  def self.up
    add_column :experience_entries, :recentity, :integer
  end

  def self.down
    remove_column :experience_entries, :recentity
  end
end
