require 'test_helper'

class ExperienceEntriesControllerTest < ActionController::TestCase
  setup do
    @experience_entry = experience_entries(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:experience_entries)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create experience_entry" do
    assert_difference('ExperienceEntry.count') do
      post :create, :experience_entry => @experience_entry.attributes
    end

    assert_redirected_to experience_entry_path(assigns(:experience_entry))
  end

  test "should show experience_entry" do
    get :show, :id => @experience_entry.to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => @experience_entry.to_param
    assert_response :success
  end

  test "should update experience_entry" do
    put :update, :id => @experience_entry.to_param, :experience_entry => @experience_entry.attributes
    assert_redirected_to experience_entry_path(assigns(:experience_entry))
  end

  test "should destroy experience_entry" do
    assert_difference('ExperienceEntry.count', -1) do
      delete :destroy, :id => @experience_entry.to_param
    end

    assert_redirected_to experience_entries_path
  end
end
