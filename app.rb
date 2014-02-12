require 'bundler'
Bundler.require
require 'sinatra/activerecord'


Dir["./lib/*"].each {|file| require file }

class CreateHannah < Sinatra::Application


	set :database, "sqlite3:///hannahsdb.db"

	get '/' do
        File.read(File.join('public/app', 'index.html'))
		# erb :index
	end

    get '/about' do
        @hannah = Hannah.all
        @hannah.to_json
    end

	post '/about' do
        @hannah = Hannah.create!(params)

        redirect '/'
		# erb :about
	end

end #<--This is the end of your class
