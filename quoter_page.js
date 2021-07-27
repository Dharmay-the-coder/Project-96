var firebaseConfig = {
      apiKey: "AIzaSyCstPjz71WEy1g-e1WzOcjWr8XyVxwjLyI",
      authDomain: "quoter2.firebaseapp.com",
      databaseURL: "https://quoter2-default-rtdb.firebaseio.com",
      projectId: "quoter2",
      storageBucket: "quoter2.appspot.com",
      messagingSenderId: "843094887086",
      appId: "1:843094887086:web:4ae6103e0f6902a628fb3f"
    };
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:username,
            message:msg,
            like:0
      });
      document.getElementById("msg").value = "";
}