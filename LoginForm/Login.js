let verifyData = () => {
  let mySavedEmail = window.localStorage.getItem("mySavedEmail");
  let mySavedPassword = window.localStorage.getItem("mySavedPassword");
  if (
    document.getElementById("emailInput").value === mySavedEmail &&
    document.getElementById("passwordInput").value === mySavedPassword
  ) {
    document.getElementById("logInButton").setAttribute("type", "submit");
    document.getElementById("form").action = "../Facebook/fal";
  } else {
    document.getElementById("logInButton").setAttribute("type", "reset");
    document.getElementById("emailInput").classList.add("is-invalid");
    document.getElementById("passwordInput").classList.add("is-invalid");
    document.getElementById("logInFeedback").innerText =
      "Email or Password not found!";
  }
};
let showPasswordFunction = () => {
  if (document.getElementById("passwordInput").type === "password") {
    document.getElementById("passwordInput").type = "text";
  } else {
    document.getElementById("passwordInput").type = "password";
  }
};

let tryLogin = function () {
  let myUsername = document.querySelector("#usernameInput").value;
  let myPassword = document.querySelector("#passwordInput").value;
  console.log(myUsername, myPassword);

  fetch("https://sharo-me.herokuapp.com/api/users/login", {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },

    body: JSON.stringify({
      username: myUsername,
      password: myPassword,
    }),
  })
   .then((res) => res.text())
   .then((data) => {
     console.log(data);
     if(data === "User Login Ok!")
     {
       window.localStorage.setItem("facebookLoggedIn, "true");
       window.localStorage.setItem("facebookLoggedUsername", myUsername);
       window.location ="../Facebook/facebook2.0.html";
       } else
     {
       document.querySelector("#usernameInput").value = "";
       document.querySelector("#passwordInput").value = "";
     }
   });
};