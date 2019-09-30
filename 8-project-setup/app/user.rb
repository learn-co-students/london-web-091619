class User < ActiveRecord::Base
  has_many :reviews
  has_many :hotels, through: :reviews

  def all_review_data
    self.reviews.map do |review|
      "--------------
      Hotel: #{review.hotel_name}
      Content: #{review.content}
      Rating: #{review.rating}
      ---------------\n"
    end
  end
end
