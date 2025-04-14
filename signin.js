function validate()
{
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "admin")
    {
        alert("Sign In Sucessfully.");
        window.location.href = "choose.html";
    }
    if(username == "" && password == "")
    {
        alert("Please enter your details.");
    }
    else
    {
        alert("Sign In Failed.");
    }
}