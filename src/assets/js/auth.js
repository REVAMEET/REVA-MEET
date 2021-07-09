// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyBb5nmKpQiMi84b55C06ayZi56sRMgoMSc",
  authDomain: "revameet-test.firebaseapp.com",
  databaseURL:
    "https://revameet-test-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "revameet-test",
  storageBucket: "revameet-test.appspot.com",
  messagingSenderId: "818726244948",
  appId: "1:818726244948:web:62b8e71c57e25d7a3b13c1",
  measurementId: "G-FK03DCW1GJ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

//signup function
function signUp() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");

  const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
  );

  //

  promise.then(function Redirect() {
    window.location = "/revameet-student";
  });
  promise.catch((e) => e.message);
  alert("SignUp Successfully");
}

//signIN function
function signIn() {
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.then(function Redirect() {
    window.location = "/revameet-student";
  });
  promise.catch((e) => alert(e.message));
}

//signOut

function signOut() {
  auth.signOut();
  window.location = "/login";
  alert("SignOut Successfully from System");
}

//active user to homepage
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    var email = user.email;
    document.querySelector("#username").innerHTML = "" + email;
  } else {
    alert("No Active user Found");
  }
});
