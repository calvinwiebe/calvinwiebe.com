class ProjectEntriesController < ApplicationController
  # GET /project_entries
  # GET /project_entries.xml
  
  before_filter :authenticate
  
  def index
    @project_entries = ProjectEntry.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @project_entries }
    end
  end

  # GET /project_entries/1
  # GET /project_entries/1.xml
  def show
    @project_entry = ProjectEntry.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @project_entry }
    end
  end

  # GET /project_entries/new
  # GET /project_entries/new.xml
  def new
    @project_entry = ProjectEntry.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @project_entry }
    end
  end

  # GET /project_entries/1/edit
  def edit
    @project_entry = ProjectEntry.find(params[:id])
  end

  # POST /project_entries
  # POST /project_entries.xml
  def create
    @project_entry = ProjectEntry.new(params[:project_entry])

    respond_to do |format|
      if @project_entry.save
        format.html { redirect_to(@project_entry, :notice => 'Project entry was successfully created.') }
        format.xml  { render :xml => @project_entry, :status => :created, :location => @project_entry }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @project_entry.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /project_entries/1
  # PUT /project_entries/1.xml
  def update
    @project_entry = ProjectEntry.find(params[:id])

    respond_to do |format|
      if @project_entry.update_attributes(params[:project_entry])
        format.html { redirect_to(@project_entry, :notice => 'Project entry was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @project_entry.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /project_entries/1
  # DELETE /project_entries/1.xml
  def destroy
    @project_entry = ProjectEntry.find(params[:id])
    @project_entry.destroy

    respond_to do |format|
      format.html { redirect_to(project_entries_url) }
      format.xml  { head :ok }
    end
  end
end
