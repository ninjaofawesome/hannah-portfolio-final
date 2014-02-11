require 'bundler'
Bundler.require

Dir["./lib/*"].each {|file| require file }

module Portfolio
	class MyPortfolio < Sinatra::Application

		get '/' do
			@results = Results.new
			erb :index
		end

		post '/about' do
			erb :work
		end

	end #<--This is the end of your class
end #<--This is the end of the module