class AddColumnPortfolio < ActiveRecord::Migration
  def change
  	add_column :portfolios, :url, :string
  end
end

