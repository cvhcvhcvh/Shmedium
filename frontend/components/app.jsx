import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import Modal from './modal/modal';
import GreetingContainer from './greeting/greeting_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import StoryIndexContainer from './stories/index/story_index_container';
import CreateStoryContainer from './stories/form/create_story_container';
import UpdateStoryContainer from './stories/form/update_story_container';
import StoryShowContainer from './stories/show/story_show_container';
import UserShowContainer from './users/user_show_container';
import SplashPageContainer from './splash/splash_page_container';


const App = () => (
  <>
    <Modal />
    <GreetingContainer />
    {/* <SplashPage/> */}
    
    

    <Switch>
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <ProtectedRoute exact path="/stories/new" component={CreateStoryContainer} />
        <ProtectedRoute exact path="/stories/:storyId/edit" component={UpdateStoryContainer} />
        <Route exact path="/stories/:storyId" component={StoryShowContainer} />
        <Route exact path="/users/:userId" component={UserShowContainer} />
        <Route exact path="/" component={SplashPageContainer}/>
        
    </Switch>
  </>
);

export default App;

