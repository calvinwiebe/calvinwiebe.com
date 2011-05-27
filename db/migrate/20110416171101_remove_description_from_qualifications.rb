class RemoveDescriptionFromQualifications < ActiveRecord::Migration
  def self.up
    remove_column :qualifications, :description
  end

  def self.down
    add_column :gualifications, :description
  end
end
