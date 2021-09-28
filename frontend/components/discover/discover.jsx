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
                      <a className="discover-links" href="https://www.google.com" target="_blank">Self</a>
                      <a className="discover-links" href="https://www.google.com" target="_blank">Relationships</a>
                      <a className="discover-links" href="https://www.google.com" target="_blank">Data Science</a>
                      <a className="discover-links" href="https://www.google.com" target="_blank">Programming</a>
                      <a className="discover-links" href="https://www.google.com" target="_blank">Productivity</a>
                      <a className="discover-links" href="https://www.google.com" target="_blank">Javascript</a>
                      <a className="discover-links" href="https://www.google.com" target="_blank">Machine Learning</a>
                      <a className="discover-links" href="https://www.google.com" target="_blank">Politics</a>
                      <a className="discover-links" href="https://www.google.com" target="_blank">Health</a>
                      <div className="see-all-topics-box">
                        <a className="see-all-topics" href="https://www.google.com" target="_blank">See all topics</a>
                      </div>
                    </div>
                    <br/>
                    <div className="bottom-site-links-box">
                      <a className="bottom-site-links" href="https://www.google.com" target="_blank">Help</a>
                        <a className="bottom-site-links" href="https://www.google.com" target="_blank">Status</a>
                        <a className="bottom-site-links" href="https://www.google.com" target="_blank">Writers</a>
                        <a className="bottom-site-links" href="https://www.google.com" target="_blank">Blog</a>
                        <a className="bottom-site-links" href="https://www.google.com" target="_blank">Careers</a>
                        <a className="bottom-site-links" href="https://www.google.com" target="_blank">Privacy</a>
                        <a className="bottom-site-links" href="https://www.google.com" target="_blank">Terms</a>
                        <a className="bottom-site-links" href="https://www.google.com" target="_blank">About</a>
                    </div>
                </div>
          
      </>
    )
  }
}

