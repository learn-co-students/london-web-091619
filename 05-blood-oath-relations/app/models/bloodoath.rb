class Bloodoath

    attr_accessor :initiation_date, :cult, :follower

    @@all = []

    def initialize(cult, follower)
        @cult = cult
        @follower = follower 
        @initiation_date = "#{Time.now.year}-#{Time.now.month}-#{Time.now.day}"

        @@all << self
    end

    def self.all 
        @@all
    end 

end 