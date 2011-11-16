require 'rubygems'
require 'tumblr'

class BlogController < ApplicationController
  def index
    Tumblr.blog = 'calvinwiebe'
    user = Tumblr::User.new('calvinwiebe@email.com', 'yourpassword')
    @posts = Tumblr::Post.all    
  end

end
