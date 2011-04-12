class ProjectsController < ApplicationController
  def index
    @projects = ProjectEntry.all
  end

end
