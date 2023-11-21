// Import the functions you need from the SDKs you need

import * as firebase from 'firebase/app';
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyC0dUt7GfW85sq5fMYHCKaGW-096NxG7hk",
  authDomain: "dclgalleryapp.firebaseapp.com",
  databaseURL: "https://dclgalleryapp-default-rtdb.firebaseio.com",
  projectId: "dclgalleryapp",
  storageBucket: "dclgalleryapp.appspot.com",
  messagingSenderId: "965652846562",
  appId: "1:965652846562:web:57f01ed542dbb851194bbb",
  measurementId: "G-QDHPSCL9XX"
};


// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const projectStorage = getStorage(app);
// export const projectFirebase = firebase.firestore(app);

