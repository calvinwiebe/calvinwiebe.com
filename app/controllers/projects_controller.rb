class ProjectsController < ApplicationController
  def index
    add_custom_response_headers
    @projects = ProjectEntry.all
  end

end
