class ExperienceController < ApplicationController
  def index
    add_custom_response_headers
    @experiences = ExperienceEntry.all
  end

end
