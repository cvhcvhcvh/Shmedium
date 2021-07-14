json.extract! story, :id, :title, :body, :author_id

json.author do
  json.extract! story.author, :id, :username, :email
end