class ApplicationController < ActionController::Base
  protect_from_forgery
  
  protected
  
  def authenticate
    authenticate_or_request_with_http_basic do |username, password|
      username == "calvinwiebe" && password == "Gi46bis$"
    end
  end
  
  def add_custom_response_headers
    if request.xhr?
      response.headers["Cache-Control"] = "no-cache, no-store, max-age=0, must-revalidate"
      response.headers["Pragma"] = "no-cache"
      response.headers["Expires"] = "Fri, 01 Jan 1990 00:00:00 GMT"
    end
  end
  
end
