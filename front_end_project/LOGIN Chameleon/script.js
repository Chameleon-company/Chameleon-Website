function loginSuccess() {
    document.getElementById('login-message').innerText = "Login was successful";
}

document.getElementById('linkedin-icon').addEventListener('click', function() {
    window.location.href = "https://www.linkedin.com/login";
});

document.getElementById('google-icon').addEventListener('click', function() {
    window.location.href = "https://accounts.google.com/signin";
});

document.getElementById('microsoft-icon').addEventListener('click', function() {
    window.location.href = "https://login.microsoftonline.com/";
});