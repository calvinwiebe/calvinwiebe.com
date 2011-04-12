class ExperienceController < ApplicationController
  def index
    @experiences = ExperienceEntry.all
  end

end
