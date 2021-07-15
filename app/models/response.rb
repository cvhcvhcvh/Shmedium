# == Schema Information
#
# Table name: responses
#
#  id         :bigint           not null, primary key
#  body       :string           not null
#  author_id  :integer          not null
#  story_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Response < ApplicationRecord
  validates :body, presence: true 

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :story,
    foreign_key: :story_id,
    class_name: :Story
    
end
