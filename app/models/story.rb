# == Schema Information
#
# Table name: stories
#
#  id        :bigint           not null, primary key
#  title     :string           not null
#  body      :string           not null
#  author_id :integer          not null
#
class Story < ApplicationRecord
  validates :title, :body, presence: true

  has_one_attached :photo

  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  
  has_many :responses,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Response

  has_many :likes, 
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Like
    
  has_many :likers,
    through: :likes,
    source: :liker
end


