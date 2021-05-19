let loggedUsername = localStorage.getItem("facebookLoggedUsername");

if(loggedUsername ! = null) {
  fetch("https://sharo-me.herokuapp.com/api/users/getUser"{
    method: "post"
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
   body: JSON.stringify({
     username: loggedUsername,
   }),
    })
    .then((res) => res.json())
    .then((userData) => {
      document.querySelector(".user-name").innerText = userData.name;
    });
}
else{
    console.log("Username unavaible")
}