# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

def find_words_containing_letter(beverages_array, letter)
    beverages_array.select { |word| word.include?(letter)}
end
puts find_words_containing_letter(beverages_array, letter_o)
puts find_words_containing_letter(beverages_array, letter_t)


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

def hash_to_array(hash)
    array = []
    has.each do |key, value|
        array << value
    end
    array.sort
end

us_states = {
    "Oregon" => "OR", 
    "Alabama" => "AL", 
    "New Jersey" => "NJ",
     "Colorado" => "CO"
}

p hash_to_array(us_states)

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    def initialize(model, wheels=2, current_speed=o)
        @model = model
        @wheels = wheels@current_speed = current_speed

    end
    
    def bike_info
        "The #{@model} bike has #{@wheels} wheels and is currently going #{current_speed} mph."
    end
end




# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

class Bike
    def initialize(speed)
      @speed = speed
    end
  
    def pedal_faster(speed_increase)
      @speed += speed_increase
      @speed = 0 if @speed < 0
    end
  
    def brake(speed_decrease)
      @speed -= speed_decrease
      @speed = 0 if @speed < 0
    end
  end
  
  #