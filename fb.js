  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAB76qXTh29g6DQO4aZo0c_bF3c7wZtmKM",
    authDomain: "prsample-54c0f.firebaseapp.com",
    databaseURL: "https://prsample-54c0f.firebaseio.com",
    projectId: "prsample-54c0f",
    storageBucket: "prsample-54c0f.appspot.com",
    messagingSenderId: "134667327794",
    appId: "1:134667327794:web:c5558954463e717bd85f2b",
    measurementId: "G-J9E53K8PQF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function insert()
  {
      var uname=document.getElementById("username").value;
      var pwd=document.getElementById("password").value;
      var db=firebase.database().ref().child('/'+uname);
      db.set({
          name:uname,
          pass:pwd
      });
      alert("record added successfully!");

  }

  function deleterec()
  {
    var uname=document.getElementById("username").value;
      var db=firebase.database().ref().child('/'+uname);
      db.remove();
      var uname=document.getElementById("username").value="";
      
      alert("record deleted successfully!");
  }

  function update()
  {
    var uname=document.getElementById("username").value;
      var pwd=document.getElementById("password").value;
      var db=firebase.database().ref().child('/'+uname);
      db.set({
        name:uname,
        pass:pwd
    });
    alert("record updated successfully!");
  }

  function display()
  {
    var db=firebase.database().ref();
    var table=document.getElementById("table");
    table.innerHTML+="<tr><th>Username</th><th>Password</td></tr>"
    db.on('value',function(snapshot){
      dbref=snapshot.val();
      for(x in dbref){
        table.innerHTML+="<tr><td>"+dbref[x].name+"</td><td>"+dbref[x].pass+"</td></tr>"
      }
    });
  }