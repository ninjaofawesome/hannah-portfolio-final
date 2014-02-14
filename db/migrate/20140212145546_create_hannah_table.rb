class CreateHannahTable < ActiveRecord::Migration
  def change
	  create_table :hannahs do |x|
			x.string	:achievement_name
			x.string	:achievement_info
			x.timestamp
  	end
  end
end
