import React,{useState} from 'react'
import { auth } from '../firebase';
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useEffect } from 'react';
function Login() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [user, setUser] = useState(null);
  let [loader, setLoader] = useState(false);
  let [error, setError] = useState("");
  let [mainLoader, setMainLoader] = useState(true);
  const trackEmail = (e) => {
    setEmail(e.target.value);
  }
  const trackPassword = (e) => {
    setPassword(e.target.value);
  }
  const printDetails = async function() {
    try{
      setLoader(true);
      let userCred = await signInWithEmailAndPassword(auth, email, password)
      console.log(userCred.user);
      setUser(userCred.user);
    }catch(err){
      setError(err.message);
      setTimeout(()=>{
        setError("");
      },3000);
    }
    
    setLoader(false);
  }
  const signout = async function () {
    await signOut(auth);
    setUser(null);
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
          setUser(user);
      }else{
        setUser(null);
      }
      setMainLoader(false);
    })
    
  },[]);
  return (
    <>
      {mainLoader === true ? "":error !== "" ? <h1>Error is {error}</h1>:loader === true ? <h1>Loaging...</h1>:user != null ? 
      <>
        <button onClick={signout}>Signout</button>
        <h1>User is {user.uid}</h1>
      </>:
      <>
      <input type="email" placeholder='Email' onChange={trackEmail}
      value={email}></input>
      <br></br>
      <input type="password" onChange={trackPassword} value={password} placeholder='Password'></input>
      <br></br>
      <button type='click' onClick={printDetails}>Login</button>
      </>
      }
    </>
   
  )
}

export default Login