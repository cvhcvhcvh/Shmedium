# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.delete_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
User.create({username: "Demo", email: "demo@user.com", password: "123456"})

# Song.delete_all
# User.connection.execute('ALTER SEQUENCE songs_id_seq RESTART WITH 1')
# Song.create({title: "Alive", artist_id: 1})

# story1 = Story.create!(
#   title: "To be, or not to be: that is the question.",
#   body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
#   author_id: 1
# )
Story.delete_all
Story.connection.execute('ALTER SEQUENCE stories_id_seq RESTART WITH 1')

story1 = Story.create!(
  title: "To be, or not to be: that is the question.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 1
)

story2 = Story.create!(
  title: "This above all: to thine own self be true.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 2
)

story3 = Story.create!(
  title: "Though this be madness, yet there is method in it.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 3
)

story4 = Story.create!(
  title: "That it should come to this!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 4
)

story5 = Story.create!(
  title: "There is nothing either good or bad, but thinking makes it so.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2000, supplemental: false),
  author_id: 5
)