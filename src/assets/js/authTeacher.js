// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCX-YLTX5pGz1J4jvZ1PvCKUf7EgGIZ4ZI",
  authDomain: "revameet-teacher.firebaseapp.com",
  projectId: "revameet-teacher",
  storageBucket: "revameet-teacher.appspot.com",
  messagingSenderId: "455083561856",
  appId: "1:455083561856:web:05d8f3ba71efaf1ce5e765",
  measurementId: "G-VN152EGWX1",
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
    window.location = "/revameet";
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
    window.location = "/revameet";
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
