require 'test_helper'

class ProjectEntriesControllerTest < ActionController::TestCase
  setup do
    @project_entry = project_entries(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:project_entries)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create project_entry" do
    assert_difference('ProjectEntry.count') do
      post :create, :project_entry => @project_entry.attributes
    end

    assert_redirected_to project_entry_path(assigns(:project_entry))
  end

  test "should show project_entry" do
    get :show, :id => @project_entry.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @project_entry.to_param
    assert_response :success
  end

  test "should update project_entry" do
    put :update, :id => @project_entry.to_param, :project_entry => @project_entry.attributes
    assert_redirected_to project_entry_path(assigns(:project_entry))
  end

  test "should destroy project_entry" do
    assert_difference('ProjectEntry.count', -1) do
      delete :destroy, :id => @project_entry.to_param
    end

    assert_redirected_to project_entries_path
  end
end
