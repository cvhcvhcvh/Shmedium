import React, { Component } from 'react'
import { Link } from 'react-router-dom';
// import StoryIndexContainer from '../stories/index/story_index_container';



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
                     <p className="who-wrote-this">App Academy</p>
                     
                        <Link className="story" to={`/stories/${this.props.story.id}`}>
                            {this.props.story.title}     
                        </Link>
        
                          <div className="subtitle-subs">
                            <br/>
                            <p className="date">Dec 28</p>
                            <p>
                              
                            </p>
                            <br/>
                            <p className="date">2 min read</p>
                            <br/>
                            <p className="genre">Nonfiction</p>
                          </div>
                  </div>
          
      </>
    )
  }
}

