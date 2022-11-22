// import React, { useContext } from 'react';
// import Feed from "./component/Feed";
// import PageNotFound from "./component/PageNotFound";
// import Profile from "./component/Profile";
// import { AuthContextProvider, AuthContext } from "./context/AuthContext";
// import { Switch, Route, Redirect } from "react-router-dom";
import React,{ useContext } from 'react';
import Signup from './component/Signup'
import Feed from './component/Feed'
import Login from './component/Login'
import PageNotFound from './component/PageNotFound'
import Profile from './component/Profile'
import { Switch, Route, Redirect} from 'react-router-dom';
import { AuthContextProvider, AuthContext } from './context/AuthContext';
function App() {
  return (
    <>
      {/* which component should render on which path */}
      <AuthContextProvider>
        <Switch>
          <RedirectToFeed path="/login" comp={Login}>
          </RedirectToFeed>
          <RedirectToFeed path="/Signup" comp={Signup}>
           </RedirectToFeed>
          <PrivateRoute path="/feed"
            comp={Feed}
          >
          </PrivateRoute>
          <PrivateRoute path="/profile"
            comp={Profile}
          >
          </PrivateRoute>
          <Redirect from='/' to="/feed"></Redirect>
          <Route>
            <PageNotFound></PageNotFound>
          </Route>
          
        </Switch>
      </AuthContextProvider>
    </>
  );
}
//what is the use of this private route
//   //First - check -> are you logged in
//   //Second - based on login details if null - send to login page 
//   //else the page which is requested
function PrivateRoute(props) {
  let Component = props.comp;
  // check -> are you loggedIN
  let cUser = useContext(AuthContext);
  // cuser-> null ->logi page
  // cuser-> anything 
  return (
    <Route
      {...props}
      render={
        (props) => {
          // logic
          return cUser != null ? <Component {...props}>
          </Component> : <Redirect
            {...props}
            to="/login"></Redirect>
        }
      }
    ></Route>
  )
}
function RedirectToFeed(props){
  let Component = props.comp;
  // check -> are you loggedIN
  let cUser = useContext(AuthContext);
  // cuser-> null ->logi page
  // cuser-> anything 
  return (
    <Route
      {...props}
      render={
        (props) => {
          // logic
          return cUser != null ? <Redirect {...props} to="/feed">
          </Redirect> : <Component
            {...props}
            ></Component>
        }
      }
    ></Route>
  )
}



// function App() {
//   return (
//    <>
//         <AuthContextProvider>
//               <Switch>
            
//             <Route path="/login">
//             <Login></Login>
//             </Route>
//             <Route path="/Signup">
//             <Signup></Signup>
//             </Route>
//             <Route path="/forget">
//             <Forget></Forget>
//             </Route>  
//             <PrivateRoute path="/profile"
//             comp={Profile}>
//             </PrivateRoute>
//             <PrivateRoute path="/feed"
//             comp={Feed}>
//             </PrivateRoute>
//             <Route>
//             <PageNotFound></PageNotFound>
//             </Route>
//             </Switch>
//         </AuthContextProvider>
//    </>
//   );
// }
// //what is the use of this private route
//   //First - check -> are you logged in
//   //Second - based on login details if null - send to login page 
//   //else the page which is requested
// function PrivateRoute(props){  
//   let Component = props.comps;
//   let cUser = useContext(AuthContext);
//   return (
//     <Route
//     {...props}
//     render={
//      (props) =>{
//       //logic
//       return cUser !== null ? <Component {...props}></Component>:<Redirect {...props} to="/login"></Redirect>
//      } 
//     }
//     ></Route>
//   )
// }
export default App;
