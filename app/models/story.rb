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


  belongs_to :author,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :User
  
  has_many :responses,
    primary_key: :id,
    foreign_key: :story_id,
    class_name: :Response
end


