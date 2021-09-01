if @like 
  json.extract! @like, :id, :story_id, :liker_id 
end