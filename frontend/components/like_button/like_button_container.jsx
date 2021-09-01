import { connect } from 'react-redux';
import { fetchLikes, fetchLike, createLike, deleteLike } from '../../util/like_api_util';
import LikeButton from './like_button';



const mstp = (state, ownProps) => {
  return({
    currentUser: state.session.id,
    storyId: state.entities.stories[ownProps.match.params.storyId],
    fetchLike: (like) => fetchLike(like), 
    createLike: (like) => createLike(like)
  })
}

const mdtp = dispatch => {
  return({
    fetchLike: (like) => fetchLike(like), 
    createResponse: (response) => dispatch(createResponse(response)), 
    deleteResponse: (responseId) => dispatch(deleteResponse(responseId))
  })  
}

export default connect(mstp, mdtp)(LikeButton)

