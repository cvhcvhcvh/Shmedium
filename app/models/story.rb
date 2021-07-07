class Story < ApplicationRecord
  validates :title, :body, presence: true
end

