import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Navbar from './navbar/navbar';
import test from './test';
import StoryIndexContainer from './stories/index/story_index_container';
import CreateStoryContainer from './stories/form/create_story_container';
import UpdateStoryContainer from './stories/form/update_story_container';
import StoryShowContainer from './stories/show/story_show_container';


const App = () => (
  <div>
    <Modal />
    <GreetingContainer />
    {/* <Navbar /> */}
    <br/>
    <header>
      <h1 className="splash-header">Medium is a place to write, read, and connect</h1>
        <p className="splash-sub-header">It's easy and free to post your thinking on any topic and connect with millions of readers.</p>
      <Link to="/" style={{ textDecoration: 'none' }}className="header-link">
      </Link>
      
    </header>
    <Switch>
        {/* <Route exact path="/" /> */}
        <Route exact path="/" component={StoryIndexContainer}/>
        <Route exact path="/banana" component={test} />
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/stories/new" component={CreateStoryContainer} />
        <ProtectedRoute exact path="/stories/:storyId/edit" component={UpdateStoryContainer} />
        <Route exact path="/stories/:storyId" component={StoryShowContainer} />
    </Switch>
  </div>
);

export default App;

