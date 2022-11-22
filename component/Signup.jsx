import React, { useState } from 'react'
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';



function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  let [loader, setLoader] = useState(false);
  let [error, setError] = useState("");
  let [user, setUser] = useState("");

  const processSignup = async() => {
      try{
      setLoader(true);
      let userCred = await createUserWithEmailAndPassword(auth, email, password)
      setUser(userCred.user);
      //sending the data to the firebase
        await setDoc(doc(db, "users", userCred.user.uid), {
        email,
        name,
        reelsIds: [],
        profileImgUrl: "",
        userId: userCred.user.uid
      });
    }catch(err){
      setError(err.message);
      setTimeout(()=>{
        setError("");
      },3000);
    }
    
    setLoader(false);
  }
  return (
    <>{
      error !== "" ? <h1>Error is {error}</h1>:
      loader === true ? <h1>Loading...</h1>:
      user !== "" ? <><h1>Signed up user is {user.uid}</h1></>:
    <>
    <input type="email" placeholder='Email' onChange={(e) =>{
      setEmail(e.target.value);
    }}
      value={email}></input>
      <br></br>
      <input type="password" onChange={(e) =>{
      setPassword(e.target.value);}} value={password} placeholder='Password'></input>
      <br></br>
      <input type="text" value={name}  placeholder='Full Name' onChange={(e) =>{
      setName(e.target.value); }}></input>
      <br></br>
      <button type='click' onClick={processSignup}>Signup</button>
      </>
    }</>
    
  )
}

export default Signup