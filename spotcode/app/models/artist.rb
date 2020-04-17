class Artist < ApplicationRecord
    has_many :albums

    validates :name, presense: true
    has_one_attached :photo 
end
