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


10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  name = "#{first_name} #{last_name}"

  User.create!(
    username: name,
    email: Faker::Internet.email(name: name, separators: '_' ),
    password: "#{name.split.join("").downcase}"
  )
end


Story.delete_all
Story.connection.execute('ALTER SEQUENCE stories_id_seq RESTART WITH 1')

story1 = Story.create!(
  title: "To be, or not to be: that is the question.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 1
)

story2 = Story.create!(
  title: "This above all: to thine own self be true.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 2
)

story3 = Story.create!(
  title: "Though this be madness, yet there is method in it.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 3
)

story4 = Story.create!(
  title: "That it should come to this!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 4
)

story5 = Story.create!(
  title: "There is nothing either good or bad, but thinking makes it so.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 5
)

story6 = Story.create!(
  title: "The lady doth protest too much, methinks.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 6
)

story7 = Story.create!(
  title: "In my mind's eye.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 7
)

story8 = Story.create!(
  title: "A little more than kin, and less than kind.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 8
)

story9 = Story.create!(
  title: "The play 's the thing wherein I'll catch the conscience of the king.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 9
)

story10 = Story.create!(
  title: "And it must follow, as the night the day, thou canst not then be false to any man.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 10
)

story11 = Story.create!(
  title: "Brevity is the soul of wit.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 1
)

story12 = Story.create!(
  title: "Doubt that the sun doth move, doubt truth to be a liar, but never doubt I love.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 2
)

story13 = Story.create!(
  title: "Rich gifts wax poor when givers prove unkind.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 3
)

story14 = Story.create!(
  title: "Do you think I am easier to be played on than a pipe?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 4
)

story15 = Story.create!(
  title: "I will speak daggers to her, but use none.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 5
)

story16 = Story.create!(
  title: "When sorrows come, they come not single spies, but in battalions.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 6
)

story17 = Story.create!(
  title: "Can one desire too much of a good thing?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 7
)

story18 = Story.create!(
  title: "I like this place and willingly could waste my time in it.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 8
)

story19 = Story.create!(
  title: "How bitter a thing it is to look into happiness through another man's eyes!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 9
)

story20 = Story.create!(
  title: "True is it that we have seen better days.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 10
)