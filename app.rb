require 'bundler'
Bundler.require

Dir["./lib/*"].each {|file| require file }

module Portfolio
	class MyPortfolio < Sinatra::Application

		get '/' do
			erb :index
		end

		# post'/about' do
		# 	erb :about
		# end

		get '/college' do
			"hello college"
		end
		get '/career' do
			"hello career"
		end

		get '/interests' do
			"hello interests"
		end

		get '/languages' do
			"hello languages"
		end


		post '/' do
			erb :params["background"]
			# erb :about
		end

	end #<--This is the end of your class
end #<--This is the end of the module