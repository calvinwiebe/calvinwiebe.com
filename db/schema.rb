# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20110603030545) do

  create_table "experience_entries", :force => true do |t|
    t.string   "company"
    t.string   "time_period"
    t.string   "title"
    t.string   "comments"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "recentity"
    t.string   "duties_partial_url"
  end

  create_table "project_entries", :force => true do |t|
    t.string   "name"
    t.string   "technologies"
    t.string   "comments"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.text     "description"
  end

  create_table "qualifications", :force => true do |t|
    t.string   "school"
    t.string   "time_period"
    t.string   "certificate"
    t.string   "comments"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.string   "desc_partial_url"
  end

end
