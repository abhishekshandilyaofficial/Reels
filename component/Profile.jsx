import { doc, getDoc } from 'firebase/firestore';
import React, {useContext, useEffect, useState} from 'react'
import { AuthContext } from '../context/AuthContext'
import {db} from '../firebase';
import './Profile.css'
function Profile() {
  //This will give user id
  let cUser = useContext(AuthContext);
  let [user, setUser] = useState();
  let [pageLoading, setPageLoading] = useState(true);
  useEffect(function fun(){
    (async function () {
      //get user using docref
      //version 8
      // var docRef = db.collection("users").doc(cUser.uid);
      // let userObj = await docRef.get();

      //version 9
      const docRef = doc(db,"users", cUser.uid);
      const userObj = await getDoc(docRef);
      console.log("Document Data: ", userObj.data());
      setUser(userObj.data());
      setPageLoading(false);
    })()
  },[])
  return (
    <>
    {pageLoading == true ? <div>Loading...</div>:
      <>
      <div className="header"></div>
      <div className="main">
             <img src={user.profileImgUrl} alt="" className='pimg' />
              <div className="details">
                <div className="content">{user.name}</div>
                <div className="content">No of Posts :<span className='bold_text'>{user.reelsIds.length}</span></div>
                <div className="content">Email :<span className='bold_text'>{user.email}</span></div>
              </div>
      </div>
      </>
    }
    </>
  )
}

export default Profile