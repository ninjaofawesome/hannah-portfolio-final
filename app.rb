require 'bundler'
Bundler.require

module Portfolio
	class MyPortfolio < Sinatra::Application

		get '/' do
			erb :index
		end

		post '/about' do
			erb :index
		end

	end #<--This is the end of your class
end #<--This is the end of the module