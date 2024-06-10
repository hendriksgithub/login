document.addEventListener("DOMContentLoaded", function() {
    // Get the login form
    const loginForm = document.querySelector(".login-form");

    // Add an event listener for the form submission
    loginForm.addEventListener("submit", function(event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get username and password values
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Check if the username and password match
        if (username === "Joachim" && password === "Joachimspw") {
            // Redirect to the specified URL
            window.location.href = "https://hendriksgithub.github.io/Prototype-website/";
        } else {
            // Show an error message
            alert("Invalid username or password.");
        }

        // Optionally, you can clear the form inputs after submission
        loginForm.reset();
    });
});
