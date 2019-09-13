import firebase from "firebase/app";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDEZYKMrZjW8HP1Uc3drnM8dGq58wbzzf4",
  authDomain: "file-upload-d8996.firebaseapp.com",
  databaseURL: "https://file-upload-d8996.firebaseio.com",
  projectId: "file-upload-d8996",
  storageBucket: "file-upload-d8996.appspot.com",
  messagingSenderId: "338857482697",
  appId: "1:338857482697:web:ec4069e769c1d90de67018"
};
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
