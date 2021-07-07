

export const createStory = story => {
  return(
    $.ajax({
      method: "POST", 
      url: "/api/stories", 
      data: {story}
    })
  )
}

