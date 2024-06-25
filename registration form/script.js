
const firebaseConfig = {
    apiKey: "AIzaSyD6KsqKA6ORO73KgpQiPEmPDKk1CDpdaeE",
    authDomain: "form-e78b6.firebaseapp.com",
    databaseURL: "https://form-e78b6-default-rtdb.firebaseio.com",
    projectId: "form-e78b6",
    storageBucket: "form-e78b6.appspot.com",
    messagingSenderId: "414462490288",
    appId: "1:414462490288:web:b4a7191b16b79895946d75"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  
  document.getElementById("Form").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
    var first = getElementVal("First");
    var last = getElementVal("Last");
    var user = getElementVal("User");
    var email = getElementVal("Email");
    var password = getElementVal("Pass");
    var Mobile = getElementVal("Mobile");
    var FormDB = firebase.database().ref(first + last);
    saveMessages(first, last, user, email, password, Mobile, FormDB);
  }
  
  const saveMessages = (first, last, user, email, password, Mobile, FormDB) => 
  {  
    FormDB.set({
      first: first,
      last: last,
      user: user,
      email: email,
      password: password,
      Mobile: Mobile,
    });
    document.getElementById("Form").reset();
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };