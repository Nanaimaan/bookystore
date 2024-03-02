import React from "react";
import { createContext, useState, useEffect } from "react";
import fire from "../helpers/Fire";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const signup = (email, password) => {
    try {
      const authresult = fire
        .auth()
        .createUserWithEmailAndPassword(email, password);
      navigate("/signin");
      console.log(authresult);
    } catch (error) {
      alert("something wrong");
      console.log(error);
    }
  };
  const login = (email, password) => {
    try {
      fire.auth().signInWithEmailAndPassword(email, password);
      //   console.log(userInfo);
      navigate("/");
    } catch (error) {
      alert("something wrong");
      console.log(error);
    }
  };
  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  let value = { signup, login };

  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
