document.getElementById('form').addEventListener('submit', submitForm);

  // Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
}
  

function submitForm(e){
        e.preventDefault();
        // Get values
        var name = getInputVal('name');
        var email = getInputVal('email');
        var message = getInputVal('message');
        var mobilenum = getInputVal('mobilenum');
        saveMessage(name,email,message,mobilenum);
        document.getElementById('form').reset();
    }
// Cl
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDh1WZPjy8CpQEchn-F1557BK1OUvG9khE",
    authDomain: "formulaire-55555.firebaseapp.com",
    databaseURL: "https://formulaire-55555.firebaseio.com",
    projectId: "formulaire-55555",
    storageBucket: "formulaire-55555.appspot.com",
    messagingSenderId: "796546101616"
  };
  firebase.initializeApp(config);
  // References the messages collection
var messagesRef = firebase.database().ref('messages');

// Save message to firebase
function saveMessage(name,email,mobilenum,message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email:email,
      name: name,
      mobilenum : mobilenum,
      message:message,
    });
  }

  