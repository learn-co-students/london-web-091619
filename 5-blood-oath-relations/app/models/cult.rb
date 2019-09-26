class Cult

    attr_reader :name, :location, :founding_year, :slogan

    @@all = []

    def initialize(name, location, founding_year, slogan)
        @name = name
        @location = location 
        @founding_year = founding_year
        @slogan = slogan

        @@all << self
    end

    def self.all 
        @@all
    end

    def self.find_by_name(name)
        @@all.find_all{|cult| cult.name == name}
    end 

    def self.find_by_location(location)
        @@all.select{|cult| cult.location == location}
    end

    def self.find_by_founding_year(year)
        @@all.select{|cult| cult.founding_year == year}
    end 

    def recruit_follower(follower)
        Bloodoath.new(self, follower)
    end 

    def bloodoaths 
        Bloodoath.all.select{|bloodoath| bloodoath.cult == self}
    end 

    def followers
        bloodoaths.map{|bloodoath| bloodoath.follower}
    end 

    def cult_population
        followers.length
    end

    def average_age
        total_of_all_ages = followers.map{|follower| follower.age}.sum
        # total_of_all_ages = followers.reduce(0) {|sum, follower| sum += follower.age}
        num_of_followers = cult_population

        total_of_all_ages.to_f / num_of_followers.to_f
    end

    def self.most_common_location
        # array_of_locations = Cult.all.map{|cult| cult.location}
        # # array_of_locations.max_by{|loc| num_of_cults(loc)}

        # array_of_locations.max_by{|loc| array_of_locations.count(loc)}
        @@all.each_with_object({}) do |cult, object|
            object[cult.location] = object[cult.location] || 1
            object[cult.location] ||= 1
            # if object[cult.location]
            #     object[cult.location] += 1
            # else
            #     object[cult.location] = 1
            # end
        end
    end

end

def num_of_cults(location)
    count = 0

    Cult.all.each do |cult|
        if cult.location == location
            count += 1
        end
    end

    count
end