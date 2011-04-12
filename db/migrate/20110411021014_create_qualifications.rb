class CreateQualifications < ActiveRecord::Migration
  def self.up
    create_table :qualifications do |t|
      t.string :school
      t.string :time_period
      t.string :certificate
      t.string :description
      t.string :comments

      t.timestamps
    end
  end

  def self.down
    drop_table :qualifications
  end
end
