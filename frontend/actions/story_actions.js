import * as StoryAPIUtil from '../util/story_api_util';

export const RECEIVE_STORIES = "RECEIVE_STORIES"
export const RECEIVE_STORY = "RECEIVE_STORY"
export const REMOVE_STORY = "REMOVE_STORY"


export const receiveStories = (stories) => {
  return({
    type: RECEIVE_STORIES, //
    stories
  })
}

export const receiveStory = (story) => {
  return({
    type: RECEIVE_STORY, //
    story
  })
}

export const removeStory = (storyId) => {
  return({
    type: REMOVE_STORY, 
    storyId
  })
}

export const requestStories = () => dispatch => {
  return(
    ReportAPIUtil.fetchStories()
    .then(stories => dispatch(receiveStories(stories)))
  )
}
  
export const requestStory = (storyId) => dispatch => {
  return(
    ReportAPIUtil.fetchStory(storyId)
    .then(story => dispatch(receiveStory(story)))
  )
}
      
export const createStory = story => dispatch => {
  return(
    StoryAPIUtil.createStory(story)
    .then(story => dispatch(receiveStory(story)))
  )
}

export const updateStory = (story) => dispatch => {
  return(
    ReportAPIUtil.updateStory(story)
    .then(story => dispatch(receiveStory(story)))
  )
}

export const deleteStory = (storyId) => dispatch => {
  return(
    ReportAPIUtil.deleteStory(storyId)
    .then(() => dispatch(removeStory(storyId)))
  )
}
