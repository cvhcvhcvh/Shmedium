# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime
#  updated_at      :datetime
#
class User < ApplicationRecord 
  attr_reader :password 
  after_initialize :ensure_session_token

  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :stories,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: :Story

  has_many :responses,
    primary_key: :id,
    foreign_key: :author_id,
    class_name: :Response

  has_many :likes, 
    primary_key: :id,
    foreign_key: :liker_id, 
    class_name: :Like

  has_many :liked_stories, 
    through: :likes, 
    source: :story
  

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    if user && user.is_password?(password)
      user 
    else 
      nil 
    end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password 
  end

  def is_password?(password)
    password_object = BCrypt::Password.new(self.password_digest)
    password_object.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= generate_session_token
  end

  def reset_session_token!
    self.session_token = generate_session_token
    self.save!  
    self.session_token 
  end

  def generate_session_token
    SecureRandom.urlsafe_base64 
  end
end
