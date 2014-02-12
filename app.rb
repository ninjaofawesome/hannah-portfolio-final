require 'bundler'
Bundler.require
require 'sinatra/activerecord'


Dir["./lib/*"].each {|file| require file }

class CreateHannah < Sinatra::Application


	set :database, "sqlite3:///hannahsdb.db"

	get '/' do
		erb :index
	end

	post '/' do
		erb :about
	end

end #<--This is the end of your class
