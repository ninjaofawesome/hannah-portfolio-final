require 'bundler'
Bundler.require
require 'sinatra/activerecord'
require 'sass'
require 'compass'

Dir["./lib/*"].each {|file| require file }

class CreateHannah < Sinatra::Application

	configure do
		set :root, File.dirname(__FILE__)
		set :public_folder, 'public/app'
	end

	set :database, "sqlite3:///database.db"

	get '/styles.css' do
		# scss "styles.scss"
		scss :styles, :style => :expanded

	end

	get '/' do
		File.read('public/app/index.html');
		# erb :index
	end

	get '/about' do
        @hannah = Hannah.all
        @hannah.to_json
    end

	post '/about' do
		#figure out what is causing sinatra to freak out on this.
        # @hannah = Hannah.create!(params)

        redirect '#/about'
		# erb :about
	end

end #<--This is the end of your class
