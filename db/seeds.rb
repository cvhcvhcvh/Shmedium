# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

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
ActiveStorage::Attachment.all.each { |attachment| attachment.purge }

story1 = Story.create!(
  title: "I Was watching Fast & Furious 5...",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 1
)
story1photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/amy-asher-giZJHm2m9yY-unsplash.jpg")
story1.photo.attach(io: story1photo, filename: "seal.jpeg")

# bad_habits = Song.create!(title: "Bad Habits", artist: "Ed Sheeran", artist_id: 1)
# bad_habits_audio = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/bad_habits/Ed+Sheeran+-+Bad+Habits+(Lyrics).mp3")
# bad_habits_thumbnail = open("https://samcloud-seed.s3.amazonaws.com/soundcloud_songs/bad_habits/ed-sheeran.jpg")
# bad_habits.audio.attach(io: bad_habits_audio, filename: "Bad_Habits.mp3")
# bad_habits.photo.attach(io: bad_habits_thumbnail, filename: "Bad_Habits.jpg")

story2 = Story.create!(
  title: "I Had Like Nine Hot Dogs Last Night",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 2
)
story2photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/ball-park-brand--zmHJsYXjqM-unsplash.jpg")
story2.photo.attach(io: story2photo, filename: "seal.jpeg")

story3 = Story.create!(
  title: "I Guess I'm Not Part of the Family",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 3
)
story3photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/billow926-4c6hTc3mTT0-unsplash.jpg")
story3.photo.attach(io: story3photo, filename: "seal.jpeg")

story4 = Story.create!(
  title: "The Street's Always Win",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 4
)
story4photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/cyrielle-c-6gA72nzMH5o-unsplash.jpg")
story4.photo.attach(io: story4photo, filename: "jpeg")

story5 = Story.create!(
  title: "How Do I Reseed My Heroku Database?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 5
)
story5photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/daniele-levis-pelusi-K88mzn884MQ-unsplash.jpg")
story5.photo.attach(io: story5photo, filename: "seal.jpeg")

story6 = Story.create!(
  title: "'So the session cookie has to match up with the user's session cookie...'",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 6
)
story6photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/duminda-perera-gB2WoAsiiQU-unsplash.jpg")
story6.photo.attach(io: story6photo, filename: "seal.jpeg")

story7 = Story.create!(
  title: "Let's Go to the Mall...TODAY!",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 7
)
story7photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/erik-mclean-munBJq3Bpg0-unsplash.jpg")
story7.photo.attach(io: story7photo, filename: "seal.jpeg")

story8 = Story.create!(
  title: "Ted is Such a Mess",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 8
)
story8photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/evgeny-makarenko-iItZQZAouVw-unsplash.jpg")
story8.photo.attach(io: story8photo, filename: "seal.jpeg")

story9 = Story.create!(
  title: "Ali is Big Boy",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 9
)
story9photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/giancarlo-corti-Yj7o7l8VR9I-unsplash.jpg")
story9.photo.attach(io: story9photo, filename: "seal.jpeg")

story10 = Story.create!(
  title: "Are You That Guy?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 10
)
story10photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/giancarlo-corti-z88llSRVZ-c-unsplash.jpg")
story10.photo.attach(io: story10photo, filename: "seal.jpeg")

story11 = Story.create!(
  title: "Who's Cobie Smulders Married To?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 1
)
story11photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/heshan-perera-wYfAny8wqR4-unsplash.jpg")
story11.photo.attach(io: story11photo, filename: "seal.jpeg")

story12 = Story.create!(
  title: "I Like Your Pizza More",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 2
)
story12photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/jan-zinnbauer-M8MfvLaZneQ-unsplash.jpg")
story12.photo.attach(io: story12photo, filename: "seal.jpeg")

story13 = Story.create!(
  title: "Having Fun is What It's All About",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 3
)
story13photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/janan-lagerwall-p2UbTX6Uoig-unsplash.jpg")
story13.photo.attach(io: story13photo, filename: "seal.jpeg")

story14 = Story.create!(
  title: "I Don't Care 'Cuz All My Friend's Are Gonna Be There",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 4
)
story14photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/john-karlo-mendoza-dKuSdqQJZQA-unsplash.jpg")
story14.photo.attach(io: story14photo, filename: "seal.jpeg")

story15 = Story.create!(
  title: "Anyway, Back to the Dexter Thing...",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 5
)
story15photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/leyla-kocak-VBwDQuK_0vI-unsplash.jpg")
story15.photo.attach(io: story15photo, filename: "seal.jpeg")

story16 = Story.create!(
  title: "Oh Yeah, She Played His Sister",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 6
)
story16photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/michelle-hernandez-pXvTLPotwgk-unsplash.jpg")
story16.photo.attach(io: story16photo, filename: "seal.jpeg")

story17 = Story.create!(
  title: "Wow, She Has a Powerful Jaw Line",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 7
)
story17photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/mu-veerapat-paKE5HsVvE8-unsplash.jpg")
story17.photo.attach(io: story17photo, filename: "seal.jpeg")

story18 = Story.create!(
  title: "You Should Get That Checked Out, Raph, That Looks serious",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 8
)
story18photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/nicholas-doherty-_3upd3R2O7k-unsplash.jpg")
story18.photo.attach(io: story18photo, filename: "seal.jpeg")

story19 = Story.create!(
  title: "Does Anybody Watch Ted Lasso?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 9
)
story19photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/oliver-hale-2cYueJxEDz8-unsplash.jpg")
story19.photo.attach(io: story19photo, filename: "seal.jpeg")

story20 = Story.create!(
  title: "Yeah That Didn't Work.  Back to the Lab with That One, Buddy",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 10
)
story20photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/omar-abascal-9Um7Huux0as-unsplash.jpg")
story20.photo.attach(io: story20photo, filename: "seal.jpeg")

story21 = Story.create!(
  title: "If I Want To Add a Border Bottom, What Does That Mean?",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 6
)
story21photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/raphael-lovaski-RjD01Is-KnI-unsplash.jpg")
story21.photo.attach(io: story21photo, filename: "seal.jpeg")

story22 = Story.create!(
  title: "Wait, Why Don't You Have ownProps...?  I'm So Confused",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 3
)
story22photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/rendy-novantino-K7TX1jvWHdU-unsplash.jpg")
story22.photo.attach(io: story22photo, filename: "seal.jpeg")

story23 = Story.create!(
  title: "It's Gotta Be Your Container, Look at the Parent",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 5
)
story23photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/sebastian-herrmann-_jFZFtCVdbc-unsplash.jpg")
story23.photo.attach(io: story23photo, filename: "seal.jpeg")

story24 = Story.create!(
  title: "Guys, Why is My Footer Not Working",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 5
)
story24photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/shawnanggg-52BigCSn2zQ-unsplash.jpg")
story24.photo.attach(io: story24photo, filename: "seal.jpeg")

story25 = Story.create!(
  title: "Good Good, Everything Broke.  Welp, Time for Bed",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 2
)
story25photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/shawnanggg-7izYW1vk5is-unsplash.jpg")
story25.photo.attach(io: story25photo, filename: "seal.jpeg")

story26 = Story.create!(
  title: "Why Does This Not Work, but When I Do This...  Oh, I forgot the Class Name",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 10
)
story26photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/shawnanggg-iLVbVxXFRgE-unsplash.jpg")
story26.photo.attach(io: story26photo, filename: "seal.jpeg")

story27 = Story.create!(
  title: "OMG, that Robin Sparkles Song is Stuck in My Head",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 10
)
story27photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/shreena-bindra-r-atrDrgt30-unsplash.jpg")
story27.photo.attach(io: story27photo, filename: "seal.jpeg")

story28 = Story.create!(
  title: "I Want to Go to Canada",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 7
)
story28photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/steven-weeks-dBmScckh7y0-unsplash.jpg")
story28.photo.attach(io: story28photo, filename: "seal.jpeg")

story29 = Story.create!(
  title: "That's Someone I Networked",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 4
)
story29photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/waldemar-brandt-tjudiLZWZmM-unsplash.jpg")
story29.photo.attach(io: story29photo, filename: "seal.jpeg")

story30 = Story.create!(
  title: "Ooooh, Let's Look at My Boy's Portfolio",
  body: Faker::Hipster.paragraph_by_chars(characters: 2500, supplemental: false),
  author_id: 8
)
story30photo = open("https://shmedium-seeds.s3.us-east-2.amazonaws.com/shmedium+pics/xu-duo-HOTr_nDl6D4-unsplash.jpg")
story30.photo.attach(io: story30photo, filename: "seal.jpeg")