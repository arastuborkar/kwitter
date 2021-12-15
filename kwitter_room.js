// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyBGntrG_l9oW9p096tm8wnDcKJFgo6aUHM",
      authDomain: "kwitter-8b104.firebaseapp.com",
      databaseURL: "https://kwitter-8b104-default-rtdb.firebaseio.com",
      projectId: "kwitter-8b104",
      storageBucket: "kwitter-8b104.appspot.com",
      messagingSenderId: "650075466599",
      appId: "1:650075466599:web:d4a83d5cad47400d2eddc2"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome"+user_name+"!";
function addRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room name-"+Room_names);
row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
      
}
