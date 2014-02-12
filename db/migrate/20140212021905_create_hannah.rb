class CreateHannah < ActiveRecord::Migration
  def change
  	create_table :hannah do |x|
  		x.string	:achievement_name
  		x. string	:achievement_info
  		x.timestamp
  end
end
