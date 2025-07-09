document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-form');
    const usernameInput = document.querySelector('input[type="text"]');
    const passwordInput = document.querySelector('input[type="password"]');
    const loginButton = document.querySelector('.login');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Check if username and password are not empty
        if (username !== '' && password !== '') {
            // Perform login action (e.g., send data to server)
            // Replace the following with your actual login logic
            console.log('Username:', username);
            console.log('Password:', password);

            // Optional: Redirect to welcome page after successful login
            window.location.href = 'WlcmP.html';
        } else {
            // Show error message if username or password is empty
            alert('Please enter both username and password.');
        }
    });
});

document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordInput = this.previousElementSibling;
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);
    this.textContent = type === 'password' ? 'Show' : 'Hide';
});
