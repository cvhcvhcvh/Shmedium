


export const fetchStories = () => {
  return(
    $.ajax({
      method: "GET",
      url: `api/stories`
    })
    )
  }
  
  export const fetchStory = (StoryId) => {
    return(
      $.ajax({
        method: "GET",
        url: `api/reports/${StoryId}`
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
  return(
    $.ajax({
      method: "PATCH",
      url: `api/story/${story.id}`, 
      data: {story}
    })
  )
}

export const deleteStory = (storyId) => {
  return(
    $.ajax({
      method: "DELETE",
      url: `api/story/${storyId}`
    })
  )
}