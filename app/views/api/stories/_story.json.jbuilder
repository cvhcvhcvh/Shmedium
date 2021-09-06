json.extract! story, :id, :title, :body, :author_id

json.author do
  json.extract! story.author, :id, :username, :email
end

if story.photo.attached?
  json.set! :photo_url, url_for(story.photo)
end