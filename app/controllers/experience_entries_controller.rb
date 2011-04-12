class ExperienceEntriesController < ApplicationController
  # GET /experience_entries
  # GET /experience_entries.xml
  
  before_filter :authenticate
    
  def index
    @experience_entries = ExperienceEntry.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @experience_entries }
    end
  end

  # GET /experience_entries/1
  # GET /experience_entries/1.xml
  def show
    @experience_entry = ExperienceEntry.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @experience_entry }
    end
  end

  # GET /experience_entries/new
  # GET /experience_entries/new.xml
  def new
    @experience_entry = ExperienceEntry.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @experience_entry }
    end
  end

  # GET /experience_entries/1/edit
  def edit
    @experience_entry = ExperienceEntry.find(params[:id])
  end

  # POST /experience_entries
  # POST /experience_entries.xml
  def create
    @experience_entry = ExperienceEntry.new(params[:experience_entry])

    respond_to do |format|
      if @experience_entry.save
        format.html { redirect_to(@experience_entry, :notice => 'Experience entry was successfully created.') }
        format.xml  { render :xml => @experience_entry, :status => :created, :location => @experience_entry }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @experience_entry.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /experience_entries/1
  # PUT /experience_entries/1.xml
  def update
    @experience_entry = ExperienceEntry.find(params[:id])

    respond_to do |format|
      if @experience_entry.update_attributes(params[:experience_entry])
        format.html { redirect_to(@experience_entry, :notice => 'Experience entry was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @experience_entry.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /experience_entries/1
  # DELETE /experience_entries/1.xml
  def destroy
    @experience_entry = ExperienceEntry.find(params[:id])
    @experience_entry.destroy

    respond_to do |format|
      format.html { redirect_to(experience_entries_url) }
      format.xml  { head :ok }
    end
  end
end
