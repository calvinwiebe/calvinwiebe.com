class EducationController < ApplicationController
  def index
    @qualifications = Qualification.all
  end

end
