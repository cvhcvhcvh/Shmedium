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
  title: "I was watching Fast & Furious 5...",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 1
)

story2 = Story.create!(
  title: "I Lowkey Had Like Nine Hot Dogs Last Night",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 2
)

story3 = Story.create!(
  title: "I guess I'm Not Part of the Family",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 3
)

story4 = Story.create!(
  title: "The Street's Always Win",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 4
)

story5 = Story.create!(
  title: "How Do I Reseed My Heroku Database?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 5
)

story6 = Story.create!(
  title: "'So the session cookie has to match up with the user's session cookie...'.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 6
)

story7 = Story.create!(
  title: "Let's Go to the Mall...TODAY!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 7
)

story8 = Story.create!(
  title: "Ted is Such a Mess.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 8
)

story9 = Story.create!(
  title: "Ali is Big Boy",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 9
)

story10 = Story.create!(
  title: "Are You That Guy?  Absolutely.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 10
)

story11 = Story.create!(
  title: "Who's Cobie Smulders Married To?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 1
)

story12 = Story.create!(
  title: "This is the Real Deal:  I Have No Idea What I'm Doing",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 2
)

story13 = Story.create!(
  title: "Having Fun is What It's All About.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 3
)

story14 = Story.create!(
  title: "I Don't Care 'Cuz All My Friend's Are Gonna Be There",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 4
)

story15 = Story.create!(
  title: "Anyway, Back to the Dexter Thing...",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 5
)

story16 = Story.create!(
  title: "Oh Yeah, She Played His Sister.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 6
)

story17 = Story.create!(
  title: "Wow, She Has a Powerful Jaw Line.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 7
)

story18 = Story.create!(
  title: "You Should Get That Checked Out, Raph, That Looks serious.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 8
)

story19 = Story.create!(
  title: "Does Anybody Watch Ted Lasso?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 9
)

story20 = Story.create!(
  title: "Yeah That Didn't Work.  Back to the Lab with That One, Buddy.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 10
)

story21 = Story.create!(
  title: "If I want to Add a Border Bottom, What Does That Mean?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 6
)

story22 = Story.create!(
  title: "Wait, Why Don't You Have ownProps...?  I'm So Confused.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 3
)

story23 = Story.create!(
  title: "It's Gotta Be Your Container, Look at the Parent.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 5
)

story24 = Story.create!(
  title: "Guys, Why is My Footer Not Working.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 5
)

story25 = Story.create!(
  title: "Good Good, Everything Broke.  Welp, Time for Bed.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 2
)

story26 = Story.create!(
  title: "Why Does This Not Work, but When I Do This...  Oh, I forgot the Class Name.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 10
)

story27 = Story.create!(
  title: "OMG, that Robin Sparkles Song is Stuck in My Head.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 10
)

story28 = Story.create!(
  title: "I Want to Go to Canada.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 7
)

story29 = Story.create!(
  title: "That's Someone I Networked With.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 4
)

story30 = Story.create!(
  title: "Ooooh, Let's Look at My Boy's Portfolio.",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 8
)


