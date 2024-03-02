// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// import { getAuth } from "firebase/auth";

// import {initializeApp} from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_geyUMBJTanMx_vQFkJgoO77Z6zPqGQ",
  authDomain: "e-commerce-c01f7.firebaseapp.com",
  projectId: "e-commerce-c01f7",
  storageBucket: "e-commerce-c01f7.appspot.com",
  messagingSenderId: "975573362340",
  appId: "1:975573362340:web:b2e94507eda53737486831",
};

// Initialize Firebase

const fire = firebase.initializeApp(firebaseConfig);
// export const auth = getAuth(fire);

export default fire;
