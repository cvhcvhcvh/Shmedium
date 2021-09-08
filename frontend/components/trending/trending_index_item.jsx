import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LikeButton from '../like_button/like_button';



export default class TrendingIndexItem extends React.Component {

  render() {

    return (
      <>

                <div className="column-stories">
                    {/* <br/>
                      <h1 className="splash-header">Medium is a place to write, read, and connect</h1> 
                      <br/>
                      <p className="splash-sub-header">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
                     */}
                    <div className="trending-logo-author">
                      <img className="logo-pic" src={window.logo} alt="logo-pic" />
                    
                      <p className="who-wrote-this">App Academy</p>
                    </div>
                    <Link className="story" to={`/stories/${this.props.story.id}`}>
                        {this.props.story.title}     
                    </Link>
        
                    <div className="subtitle-subs">
                      <br/>
                      <p className="date">Dec 28 •</p>
                      <br/>
                      <p className="date">2 min •</p>
                      <br/>
                      <p className="genre">Nonfiction</p>
                      {/* <LikeButton/> */}
                    </div>
                  </div>
          
      </>
    )
  }
}

