class ExperienceEntry < ActiveRecord::Base
   default_scope :order => "recentity DESC"
end
