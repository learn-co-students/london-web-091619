hotel1 = Hotel.create(name: "Joe's Hotel", description: "The world's best hotel")
hotel2 = Hotel.create(name: "Hotel California", description: "A very overplayed song")
hotel3 = Hotel.create(name: "Hotel Motel", description: "Holiday Inn")

user1 = User.create(username: "JoeC", password: "password1")

review1 = Review.create(user_id: 1, hotel_id: 1, content: "THIS IS THE BEST HOTEL!!!!", rating: 5)
