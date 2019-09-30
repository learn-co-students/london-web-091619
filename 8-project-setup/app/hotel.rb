class Hotel < ActiveRecord::Base
  has_many :reviews
  has_many :users, through: :reviews


  def self.all_names
    all.map { |hotel| hotel.name }
  end
end
