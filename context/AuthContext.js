import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = React.createContext();

export function AuthContextProvider({children}){
    let [cUser, setUser] = useState(null);
    let [mainLoader, setMainLoader] = useState(true);
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
          if(user){
              setUser(user);
          }else{
            setUser(null);
          }
          setMainLoader(false);
        })
        return unsubscribe;
      },[]);
    let value = cUser ;
    return(
        <AuthContext.Provider value={value}>
            {mainLoader === false && children}
        </AuthContext.Provider>
    )
}
