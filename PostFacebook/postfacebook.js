let userDataId = window.localStorage.getItem("userDataId");
let authorName = window.localStorage.getItem("firstName") + " " + window.localStorage.getItem("lastName");

let tryPost = function(){
    let authorName = document.getElementById("authorName").value
    let myPostText = document.querySelector("#textareImput").value;
    let myPictureLink = document.querySelector("#linkInput").value;
    let myDate = new Date();
    let localTimeStamp = myDate.getTime();

fetch("https://sharo-me.herokuapp.com/api/post/create", {
     method: "post",
     headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
          userId: userId,
          postText: myPostText,
          pictureLink: myPictureLink,
          author: authorName,
          timeSamp: localTimeStamp,
    })
   .then((res) => res.text())
   .then((data) => {
     console.log(data);
     if( data === "postSend")
     {  
        window.localtion ="../Facebook/facebook2.0.html"
     }
     else
     {
         console.log("fail to attempt")
     }
   }