const firebaseConfig = {
  apiKey: "AIzaSyBFn-2xjHYu9sKDrCCOOU6wOrd8075zb4g",
  authDomain: "let-s-poll-19504.firebaseapp.com",
  projectId: "let-s-poll-19504",
  storageBucket: "let-s-poll-19504.appspot.com",
  messagingSenderId: "1072131202341",
  appId: "1:1072131202341:web:7bc61c1f920a02a5aececc",
  measurementId: "G-DWPDKBWLLD"
};

// initialize firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = firebase.auth();
const db =firebase.firestore()

// console.log(app.options);  function signUp(){
 function signUp() {

    var email = document.getElementById("email");
    var password = document.getElementById("password") 
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value).then(function() {
 
    var id=firebase.auth().currentUser.uid;
     
  window.location.assign('create poll.html');
     
      
    }); 
    alert("hello");
   promise.then(u => {
        alert("Signed Up");
    })
  // promise.catch(e => alert(e.message));
 }

// firebase.auth().createUserWithEmailAndPassword(email.value,password.value).then(function(){
    
       
//   var id=firebase.auth().currentUser.uid;
//  then(()=>{

//      window.location.assign('create poll.html');
    
//   }).catch(err => {
//      window.alert(err.message);
//  })
// }).catch(function(error){

//   var errorcode=error.code;
//   var errormsg=error.message;
//   window.alert(errormsg);

//  });

 function signIn(){

 var email = document.getElementById("email");
 var password = document.getElementById("password");

 const promise = auth.signInWithEmailAndPassword(email.value, password.value).then(function() {
 
  var id=firebase.auth().currentUser.uid;

  window.location.assign('create poll.html');


 });
 
 alert("Hello");
  promise.then(u =>{
 alert("Signed In");})
 //promise.catch(e => alert(e.message));
 }
 