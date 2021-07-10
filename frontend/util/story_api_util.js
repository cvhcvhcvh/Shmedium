


export const fetchStories = () => {
  return(
    $.ajax({
      method: "GET",
      url: `api/stories`
    })
    )
}
  
export const fetchStory = (storyId) => {
  return(
    $.ajax({
      method: "GET",
      url: `api/stories/${storyId}`
    })
    )
}
    
export const createStory = story => {
  return(
    $.ajax({
      method: "POST", 
      url: `api/stories`, 
      data: {story}
    })
  )
}
export const updateStory = (story) => {
  const test = story.id
  delete story.id
  return(
    $.ajax({
      method: "PATCH",
      url: `api/stories/${test}`, 
      data: {story}
    })
  )
}

export const deleteStory = (storyId) => {
  return(
    $.ajax({
      method: "DELETE",
      url: `api/stories/${storyId}`
    })
  )
}