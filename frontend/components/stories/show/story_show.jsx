import React from 'react';
import { Link } from 'react-router-dom';


/*
Write a `ReportShow` presentational component that renders a report's
information (understanding, improvement, and date/time created/updated). This
component should receive the report from the store as props via its container
and fetch it once it has successfully mounted to the DOM. Only display the
`updatedAt` date/time if it is different than the `createdAt` date/time.
Additionally, include a link back to the `ReportIndex`.

Display the date and time of the `createdAt`/`updatedAt` properties like this:
`formatDateTime(this.props.report.createdAt)`
`formatDateTime(this.props.report.updatedAt)`
*/

class StoryShow extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestStory(this.props.match.params.storyId)
  }

  render(){
    return(
      <>
        <p>{this.props.story.title}</p>
        <p>{this.props.story.body}</p>
        <Link to={`/`}>Story Index</Link>
      
      </>
    )
  }
}

export default StoryShow