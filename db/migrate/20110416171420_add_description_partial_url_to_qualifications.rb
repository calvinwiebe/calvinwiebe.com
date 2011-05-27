class AddDescriptionPartialUrlToQualifications < ActiveRecord::Migration
  def self.up
    add_column :qualifications, :desc_partial_url, :string
  end

  def self.down
    remove_column :qualifications, :desc_partial_url
  end
end
