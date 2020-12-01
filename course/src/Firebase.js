import firebase from 'firebase/app'
import "firebase/auth"
import "firebase/database"
import "firebase/storage"

// CourseLamp database
var firebaseConfig = {
    apiKey: "AIzaSyCyReey4db3UJrqYIaQwC72jsaip823aJ4",
    authDomain: "course-lamp-v-1-0.firebaseapp.com",
    databaseURL: "https://course-lamp-v-1-0.firebaseio.com",
    projectId: "course-lamp-v-1-0",
    storageBucket: "course-lamp-v-1-0.appspot.com",
    messagingSenderId: "253734610258",
    appId: "1:253734610258:web:11683f7ac49c1329c2068b",
    measurementId: "G-YN66LTYQ3B"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;