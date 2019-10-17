class Blogger < ApplicationRecord
  has_many :posts
  has_many :destinations, through: :posts

  validates :name, uniqueness: true
  validates :age, numericality: { greater_than: 0 }
  validates :bio, length: { minimum: 30 }

  def total_likes
    likes = self.posts.map { |post| post.likes }
    likes.sum
  end

  def featured_post
    self.posts.max_by {|post| post.likes }
  end
end
