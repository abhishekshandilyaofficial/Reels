import React,{ useContext } from 'react';
import Signup from './component/Signup'
import Feed from './component/Feed'
import Login from './component/Login'
import Forget from './component/Forget'
import PageNotFound from './component/PageNotFound'
import Profile from './component/Profile'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import { AuthContextProvider, AuthContext } from './context/AuthContext';
function App() {
  return (
   <>
   <BrowserRouter>
        <AuthContextProvider>
              <Switch>
            
            <Route path="/login">
            <Login></Login>
            </Route>
            <Route path="/Signup">
            <Signup></Signup>
            </Route>
            <Route path="/forget">
            <Forget></Forget>
            </Route>  
            <PrivateRoute path="/profile"
            comp={Profile }>
            </PrivateRoute>
            <PrivateRoute path="/feed"
            comp={Feed}>
            </PrivateRoute>
            <Route>
            <PageNotFound></PageNotFound>
            </Route>
            </Switch>
        </AuthContextProvider>
      
    </BrowserRouter>
   </>
  );
}
//what is the use of this private route
  //First - check -> are you logged in
  //Second - based on login details if null - send to login page 
  //else the page which is requested
function PrivateRoute(props){  
  let Component = props.comps;
  let cUser = useContext(AuthContext);
  return (
    <Route
    {...props}
    render={
     (props) =>{
      //logic
      return cUser != null ? <Component {...props}></Component>:<Redirect {...props} to="/login"></Redirect>
     } 
    }
    ></Route>
  )
  // 
}

export default App;
