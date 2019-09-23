class Follower
    attr_reader :name, :age, :life_motto

    @@all = []

    def initialize(name, age, life_motto)
        @name = name 
        @age = age 
        @life_motto = life_motto
        @mom = "The best lady"

        @@all << self
    end

    def self.all
        @@all
    end 

    def self.of_a_certain_age(age)
        @@all.select{|follower| follower.age >= age}
    end 

    def bloodoaths
        Bloodoath.all.select{|bloodoath| bloodoath.follower == self}
    end 

    def cults
        bloodoaths.map{|bloodoath| bloodoath.cult}
    end 

    def join_cult(cult)
        Bloodoath.new(cult, self)
    end 

    def self.most_active
        @@all.max_by{|follower| follower.cults.count}
        # @@all.sort{|follower| follower.cults.count }[0]
    end

end