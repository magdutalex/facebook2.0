let verifyData = () => {
  let mySavedEmail = window.localStorage.getItem("mySavedEmail");
  let mySavedPassword = window.localStorage.getItem("mySavedPassword");
  if (
    document.getElementById("emailInput").value === mySavedEmail &&
    document.getElementById("passwordInput").value === mySavedPassword
  ) {
    document.getElementById("logInButton").setAttribute("type", "submit");
    document.getElementById("form").action = "";
  } else {
    document.getElementById("logInButton").setAttribute("type", "reset");
    document.getElementById("emailInput").classList.add("is-invalid");
    document.getElementById("passwordInput").classList.add("is-invalid");
    document.getElementById("logInFeedback").innerText =
      "Email or Password not found!";
  }
  fetch("https://sharo-me.herokuapp.com/api/users/login",{
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: mySavedEmail,
      password: mySavedPassword,
    }),
  })
  .then((response) => response.text())
  .then((data) => {
    if(data === "User Login"){
      window.location = "../Facebook/facebook2.0.html";
    }
    else
    {
     console.log("password incorect")
    }
  })
};
let showPasswordFunction = () => {
  if (document.getElementById("passwordInput").type === "password") {
    document.getElementById("passwordInput").type = "text";
  } else {
    document.getElementById("passwordInput").type = "password";
  }
};
