$(document).ready(function () {
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAg6raW7bi6SsS1I7JBzWWMo-qmabFp59c",
    authDomain: "fir-demo-115ef.firebaseapp.com",
    projectId: "fir-demo-115ef",
    storageBucket: "fir-demo-115ef.appspot.com",
    messagingSenderId: "686623492429",
    appId: "1:686623492429:web:96d4c4dcc531cd40828f04",
    measurementId: "G-NK0P4C56H5"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  console.log(app);  // "[DEFAULT]"


});