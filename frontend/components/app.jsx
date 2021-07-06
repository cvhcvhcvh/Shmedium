// import React from "react";
// import GreetingContainer from "./greeting/greeting_container";

// const App = () => (
//   <div>
//     <header>
//       <h1>Shmedium: one size fits most</h1>
//       <GreetingContainer />
//     </header>
//   </div>
// );

// export default App;

import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import GreetingContainer from './greeting/welcome_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <Link to="/" style={{ textDecoration: 'none' }}className="header-link">
        <h1 className={"splashlogo"}>Shmedium: one size fits most</h1>
        {/* <img src="" alt="" /> */}
      </Link>
      <GreetingContainer />
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LogInFormContainer} />
      <AuthRoute exact path="/signup" component={SignUpFormContainer} />
    </Switch>
  </div>
);

export default App;

