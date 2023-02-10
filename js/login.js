function checkCredentials() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "admin") {
        alert("Login successful");
    } else {
        alert("Login failed");
    }
}