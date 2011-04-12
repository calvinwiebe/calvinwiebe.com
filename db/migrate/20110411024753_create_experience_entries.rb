class CreateExperienceEntries < ActiveRecord::Migration
  def self.up
    create_table :experience_entries do |t|
      t.string :company
      t.string :time_period
      t.string :title
      t.string :duties
      t.string :comments

      t.timestamps
    end
  end

  def self.down
    drop_table :experience_entries
  end
end
