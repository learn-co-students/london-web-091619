class User < ApplicationRecord
  has_many :pets, dependent: :destroy
  # Validating using a regular expression or regex to ensure each user's email follows certain formatting rules.
  validates_format_of :email, with: /\A[^@\s]+@([^@\s]+\.)+[^@\s]+\z/


end
