document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.querySelector('input[type="text"]').value;
    let password = document.querySelector('input[type="password"]').value;

    if ((username === "admin" || username === "user") && password === "1234") {
        window.location.href = "home.html";
    } else {
        alert("Invalid Username or Password!");
    }
});