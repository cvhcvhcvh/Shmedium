import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class LikeButton extends React.Component{
  constructor(props){
    super(props)
    
    this.state = {
      liked: false
    }
  }

  componentDidMount(){
    if (this.props.currentUserId){
      this.props.fetchLike({story_id: this.props.storyId, liker_id: this.props.currentUserId})
      .then(res => {
        this.setState({liked: Boolean(Object.keys(res).length)})
      })
    }
  }
  
  toggleButton = () => {
    if (this.state.liked){
      this.props.deleteLike({liker_id: this.props.currentUserId, story_id: this.props.storyId})
      .then(res => {
          this.setState({liked: false}
        )
      })
    } else {
      this.props.createLike({liker_id: this.props.currentUserId, story_id: this.props.storyId})
      .then(res => {
          this.setState({liked: true}
        )
      })
    }
  }

  render(){
    return(
    <>
    {/* {console.log(this.props)}       */}
      <button onClick={this.toggleButton}>
        {this.state.liked ? 
          <div className="heart-liked" ><FontAwesomeIcon icon={faHeart} /></div>
        : <div className="heart-disliked" ><FontAwesomeIcon icon={faHeart} /></div>
      }
      </button>
    </>
    )
  }
}

export default LikeButton