const firebaseConfig = {
      apiKey: "AIzaSyDTSFYWpz7n-EY9fchtdulHLoUlJAU86-s",
      authDomain: "kwitter-c441b.firebaseapp.com",
      databaseURL: "https://kwitter-c441b-default-rtdb.firebaseio.com",
      projectId: "kwitter-c441b",
      storageBucket: "kwitter-c441b.appspot.com",
      messagingSenderId: "471663597690",
      appId: "1:471663597690:web:5e43ca39c51f9d696943c3",
      measurementId: "G-H1LZBLH3BQ"
    };

    // Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room Name -"+ room_name);
row="<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update(
      {
       purpose:"adding room name"
      });
       
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}