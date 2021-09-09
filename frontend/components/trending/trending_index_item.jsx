import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import LikeButton from '../like_button/like_button';



export default class TrendingIndexItem extends React.Component {
  constructor(props){
    super(props)
  }

  // numbers(){
  //   if (this.props.story.id === 8) {
  //     return({
        
  //     })
  //   }
  // }

  
  render() {
    {console.log(this.props.story)}



    return (
      <>
                <div className="column-stories">
                    <div className="trending-logo-author">
                      <div className="trending-numbers">
                        {this.props.story.id === 8 ? 
                        <h2 className="number-height">01</h2> : null
                        }
                        {this.props.story.id === 9 ? 
                        <h2 className="number-height">02</h2> : null
                        }
                        {this.props.story.id === 10 ? 
                        <h2 className="number-height">03</h2> : null
                        }
                        {this.props.story.id === 11 ? 
                        <h2 className="number-height">04</h2> : null
                        }
                        {this.props.story.id === 12 ? 
                        <h2 className="number-height">05</h2> : null
                        }
                        {this.props.story.id === 13 ? 
                        <h2 className="number-height">06</h2> : null
                        }
                      </div>
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

