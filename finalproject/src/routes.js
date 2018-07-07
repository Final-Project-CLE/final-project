import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';
import Page from './components/Page/Page';

const auth = new Auth();

const handleAuthentication = ({location}) => {
  if (/access_token|id_token|error/.test(location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
      <Router history={history}>
        <div>
          <Route path="/" render={(props) => <App auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
        </div>
      </Router>
  );
}

// Old routes from Page.js
{/* <Route exact path="/" component={Home} />
<Route exact path="/login" component={Login} />
<Route exact path="/newuser" component={NewUser} />
<Route exact path="/quizzes" component={Quizzes} />
<Route exact path="/newquiz" component={NewQuiz} />
<Route exact path="/:id" component={QuizPage} /> */}