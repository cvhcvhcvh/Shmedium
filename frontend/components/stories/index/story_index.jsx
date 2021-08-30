import React from 'react';
import { Link } from 'react-router-dom';
import StoryIndexItem from './story_index_item';



class StoryIndex extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestStories()
    this.props.requestUsers()
  }

  render(){
    
    const { stories } = this.props
    return(
      <>
        <div className="home-index">
          {stories.map(story =>{
            return(
              
              <StoryIndexItem key={story.id} story={story}/>
            )
          })}
            
        </div>
      </>
    )
  }
}

export default StoryIndex