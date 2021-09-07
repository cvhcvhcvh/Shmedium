import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Discover extends React.Component {

  render() {

    return (
      <>
      
                <div className="discover-text">
                  <p className="discover-header">DISCOVER MORE OF WHAT MATTERS TO YOU</p>
                    <div className="discover-box">
                      {/* <button>
                        Self
                      </button> */}
                      <a className="discover-links" href="https://www.google.com">Self</a>
                      <a className="discover-links" href="https://www.google.com">Relationships</a>
                      <a className="discover-links" href="https://www.google.com">Data Science</a>
                      <a className="discover-links" href="https://www.google.com">Programming</a>
                      <a className="discover-links" href="https://www.google.com">Productivity</a>
                      <a className="discover-links" href="https://www.google.com">Javascript</a>
                      <a className="discover-links" href="https://www.google.com">Machine Learning</a>
                      <a className="discover-links" href="https://www.google.com">Politics</a>
                      <a className="discover-links" href="https://www.google.com">Health</a>
                      <div className="see-all-topics-box">
                        <a className="see-all-topics" href="https://www.google.com">See all topics</a>
                      </div>
                    </div>
                    <br/>
                    <div className="bottom-site-links-box">
                      <a className="bottom-site-links" href="https://www.google.com">Help</a>
                        <a className="bottom-site-links" href="https://www.google.com">Status</a>
                        <a className="bottom-site-links" href="https://www.google.com">Writers</a>
                        <a className="bottom-site-links" href="https://www.google.com">Blog</a>
                        <a className="bottom-site-links" href="https://www.google.com">Careers</a>
                        <a className="bottom-site-links" href="https://www.google.com">Privacy</a>
                        <a className="bottom-site-links" href="https://www.google.com">Terms</a>
                        <a className="bottom-site-links" href="https://www.google.com">About</a>
                    </div>
                </div>
          
      </>
    )
  }
}

