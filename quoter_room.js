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
username = localStorage.getItem("username");
room_name = localStorage.getItem("room_name");
document.getElementById("username").innerHTML = "Welcome " + username + "!";
function addRoom()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding the name of a room jesus why are you so dumb you should know omg"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "quoter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div> </hr>"; 
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "quoter_page.html";
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location = "quoter.html";
}