class AddDutiesPartialUrlToExperienceEntries < ActiveRecord::Migration
  def self.up
    add_column :experience_entries, :duties_partial_url, :string
  end

  def self.down
    remove_column :experience_entries, :duties_partial_url
  end
end
