class AddPortfolioTable < ActiveRecord::Migration
  def change
  	create_table :portfolio do |x|
		x.string	:work_name
		x.string	:work_info
		x.timestamp
end
  end
end
