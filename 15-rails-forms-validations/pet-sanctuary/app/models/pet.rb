class Pet < ApplicationRecord
  # belongs_to immediately sets up some validation - an instance of pet must have a valid user_id to be created.
  belongs_to :user

  # Some in-built validation for the name attribute.
  validates :name, {
    # A pet must have a name.
    presence: true,
    # A pet's name must not be the same as any existing pet already in the database.
    uniqueness: true,
    # A pet's name must be at least 2 characters long and no longer than 20 characters.
    length: { in: 2..20 }
  }

  # Validate our instance of pet using our own custom method - we use validate here instead of validates.
  validate :unlucky?

  # Custom validation method.
  def unlucky?
    # Check if the name of the instance of pet is 13 characters long.
    if self.name.length == 13
      # If it is, add to this instance of pet's errors. The first argument we pass it relates to which attribute we are validating and the second is the value of the error message.
      self.errors.add(:name, "can't be 13 characters long! That's bad luck!")
    end
  end

end
