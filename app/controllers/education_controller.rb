class EducationController < ApplicationController
  def index
    add_custom_response_headers
    @qualifications = Qualification.all
  end

end
