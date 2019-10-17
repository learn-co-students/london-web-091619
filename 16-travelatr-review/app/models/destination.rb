class Destination < ApplicationRecord
  has_many :posts
  has_many :bloggers, through: :posts

  def latest_posts
    self.posts.last(5)
  end

  def featured_post
    self.posts.max_by { |post| post.likes }
  end

  def unique_bloggers
    self.bloggers.uniq
  end

  def average_age_of_bloggers
    ages = self.unique_bloggers.map { |blogger| blogger.age }
    ages.sum / ages.length
  end
end
