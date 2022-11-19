import React from 'react';
import Signup from './component/Signup'
import Feed from './component/Feed'
import Login from './component/Login'
import Forget from './component/Forget'
import PageNotFound from './component/PageNotFound'
import Profile from './component/Profile'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
   <>
   <BrowserRouter>
        <AuthContextProvider>
              <Switch>
            <Route path="/feed">
            <Feed></Feed>
            </Route>
            <Route path="/login">
            <Login></Login>
            </Route>
            <Route path="/Signup">
            <Signup></Signup>
            </Route>
            <Route path="/forget">
            <Forget></Forget>
            </Route>  
            <Route path="/profile">
            <Profile></Profile>  
            </Route>
            <Route>
            <PageNotFound></PageNotFound>
            </Route>
            </Switch>
        </AuthContextProvider>
      
    </BrowserRouter>
   </>
  );
}

export default App;
