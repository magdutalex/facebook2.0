let isUserLoggedIn = localStorage.getItem("facebookLoggedIn");

if(isUserLoggedIn == null)
{
 console.log("Redirect to Login");
 window.location = "../LoginForm/Login.html"
}

