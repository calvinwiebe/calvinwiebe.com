require 'rubygems'
require 'tumblr'

class BlogController < ApplicationController
  def index
    add_custom_response_headers
    Tumblr.blog = 'calvinwiebe'
    user = Tumblr::User.new('calvinwiebe@email.com', 'yourpassword')
    @posts = Tumblr::Post.all    
  end

end
