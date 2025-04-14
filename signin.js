function validate(event)
{
    event.preventDefault();

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if(username == "admin" && password == "admin")
    {
        alert("Sign In Sucessfully.");
        window.location.href = "HOME PAGE.HTML";
    }
    else
    {
        alert("Please enter correct details.\nSign In Failed.");
    }
}