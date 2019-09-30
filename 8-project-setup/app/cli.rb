class CLI

  @@prompt = TTY::Prompt.new

  def run
    puts "Welcome to My Hotel App"
    @current_user = login
    if @current_user
      main_menu
    else
      puts "We couldn't find that user. Please try again"
      run
    end
  end

  # Log a user in
  def login
    username = @@prompt.ask("Please enter your username: ")
    password = @@prompt.ask("Please enter your password: ")

    User.find_by(username: username, password: password)
  end

  # Show a main menu with options to create a new review or list all of a user's reviews
  def main_menu
    selection = @@prompt.select("What would you like to do?", "See My Reviews", "Review a Hotel")

    if selection == "See My Reviews"
      print_user_reviews
    else
      review_hotel
    end
    main_menu
  end

  def print_user_reviews
  # List all of a user's reviews
    # Print out a list of every review that belongs to the currently logged in user, including the rating, content and name of the hotel that the review is for
    puts @current_user.all_review_data
  end

  def review_hotel
    # Create new review
      # Print out a list of every hotel and its description
      selection = @@prompt.select("Select the hotel you want to review", Hotel.all_names)
      selected_hotel = Hotel.find_by(name: selection)

      content = @@prompt.ask("Please enter the content of your review: ")
      rating = @@prompt.ask("Please enter a number from 1 - 5: ")
  
      # Allow the logged in user to create a review for the hotel they select
      Review.create(content: content, rating: rating.to_i, hotel_id: selected_hotel.id, user_id: @current_user.id)
      puts "Your review has been successfully created"
  end

end
