let userDataId = window.localStorage.getItem("mySavedDataId");
let authorName = window.localStorage.getItem("firstName") + " " + window.localStorage.getItem("lastName");

      let tryPost = function(){
    let authorName = document.getElementById("authorName").value
    let myPostText = document.getElementById("textareImput").value;
    let myPictureLink = document.getElementById("linkInput").value;
    let myDate = new Date();
    let localTimeStamp = myDate.getTime();

fetch("https://sharo-me.herokuapp.com/api/post/create", {
     method: "post",
     headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
          userId: userDataId,
          postText: myPostText,
          pictureLink: myPictureLink,
          author: authorName,
          timeSamp: localTimeStamp,
    }),
    })
   .then((res) => res.text())
   .then((data) => {
     console.log(data);
     if(data === "postSend")
     {   
        window.localStorage.setItem("mySavedDataId", userDataId);
        window.localStorage.setItem("mySavedAuthor", authorName);
        window.localtion ="../Facebook/facebook2.0.html"
     }
     else
     {
         console.log("fail to attempt")
     }
    })
   };