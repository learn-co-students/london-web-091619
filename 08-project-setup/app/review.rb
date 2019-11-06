class Review < ActiveRecord::Base
  belongs_to :user
  belongs_to :hotel

  def hotel_name
    self.hotel.name
  end
  
end
