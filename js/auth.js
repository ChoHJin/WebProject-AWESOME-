var express = require('express');
var router = express.Router();

// Your web app's Firebase configuration
    var firebaseConfig = {
        apiKey: "AIzaSyCSlJebGWkCblHmgDlvjn4ulO4NiyD1vUM",
        authDomain: "awesome-19ca7.firebaseapp.com",
        databaseURL: "https://awesome-19ca7.firebaseio.com",
        projectId: "awesome-19ca7",
        storageBucket: "awesome-19ca7.appspot.com",
        messagingSenderId: "90912165169",
        appId: "1:90912165169:web:add6f2090e04e3971c3410",
        measurementId: "G-0HVLWXR26R"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


  firebase.auth.Auth.Persistence.LOCAL;


  $("#btn-login").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();

      if(email != ""  &&  password != "")
      {
          var result = firebase.auth().signInWithEmailAndPassword(email, password);

          result.catch(function(error)
          {
              var errorCode = error.code;
              var errorMessage = error.message;

              console.log(errorCode);
              console.log(errorMessage);

              window.alert("Message : " + errorMessage);
          });
      }
      else
      {
          window.alert("Form is incomplete. Please fill out all fields.");
      }
  });


  $("#btn-signup").click(function()
  {
      var email = $("#email").val();
      var password = $("#password").val();
      var cPassword = $("#confirmPassword").val();

      if(email != ""  &&  password != ""  &&  cPassword != "")
      {
          if(password == cPassword)
          {
            var result = firebase.auth().createUserWithEmailAndPassword(email, password); 

            result.catch(function(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;
  
                console.log(errorCode);
                console.log(errorMessage);
  
                window.alert("Message : " + errorMessage);
            });
          }
          else
          {
            window.alert("Password do not match with the Confirm Password.");
          }
      }
      else
      {
          window.alert("Form is incomplete. Please fill out all fields.");
      }
  });



  $("#btn-resetPassword").click(function()
  {
     var auth = firebase.auth();
     var email = $("#email").val();

     if(email != "")
     {
         auth.sendPasswordResetEmail(email).then(function()
         {
            window.alert("Email has been sent to you, Please check and verify.");
         })
         .catch(function(error)
         {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert("Message : " + errorMessage);
         });
     }
     else
     {
        window.alert("Please write your email first.");
     }
  });



  $("#btn-logout").click(function()
  {
     firebase.auth().signOut();
  });




  $("#btn-update").click(function()
  {
    var phone = $("#phone").val();
    var address = $("#address").val();
    var bio = $("#bio").val();
    var fName = $("#firstName").val();
    var sName = $("#secondName").val();
    var country = $("#country").val();
    var gender = $("#gender").val();

    var rootRef = firebase.database().ref().child("Users");
    var userID = firebase.auth().currentUser.uid;
    var usersRef = rootRef.child(userID);

    if(fName!="" && sName!="" && phone!="" && country!="" && gender!="" && bio!="" && address!="")
    {
        var userData = 
        {
            "phone": phone,
            "address": address,
            "bio": bio,
            "firstName": fName,
            "secondName": sName,
            "country": country,
            "gender": gender,
        };

        usersRef.set(userData, function(error)
        {
            if(error)
            {
                var errorCode = error.code;
                var errorMessage = error.message;

                console.log(errorCode);
                console.log(errorMessage);

                window.alert("Message : " + errorMessage);
            }
            else
            {
                window.location.href = "/mainForm";
            }
        });
    }
    else
    {
        window.alert("Form is incomplete. Please fill out all fields.");
    }
  });


function switchView(view)
{
    $.get({
        url:view,
        cache:false,
    })
    .then(function(data){
        $("#container").html(data);
    });
}
