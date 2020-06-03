$(document).ready(function () {

    // Text input areas (Where user writes their details in)
    const usernameField = $("#username");
    const emailField = $("#email");
    const passwordField = $("#password")

    // Buttons and all that jazz
    const submitUserBtn = $("#register-btn")

    function addUser(event) {
        event.preventDefault()
        let userDeets = {
            username: usernameField.val().trim(),
            email: emailField.val().trim(),
            password: passwordField.val().trim()
        }
        $.post("/api/signupuser", userDeets, function () {
            console.log("User Created!")
        });
        usernameField.val("");
        emailField.val("");
        passwordField.val("");
    }

    // On-Click events go here
    submitUserBtn.on("click", addUser);
})