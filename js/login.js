document.addEventListener("DOMContentLoaded", function () {
    // Function to validate email format
    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }

    // Function to validate password length
    function validatePassword(password) {
        return password.length >= 6;
    }

    // Function to handle form submission
    const onSubmit = async () => {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");

        const email = emailInput.value;
        const password = passwordInput.value;

        // Validate email
        if (!validateEmail(email)) {
            alert("Invalid email format");
            return;
        }

        // Validate password
        if (!validatePassword(password)) {
            alert("Password must be at least 6 characters");
            return;
        }

        const { user_id } = await fetch('http://localhost:5000/user/login', {
            method: 'POST', body: JSON.stringify({
                email: email, password: password
            })
        })

        console.log(user_id)
        localStorage.setItem('user_id', user_id)
        window.location.href = 'index.html'
    }

    // Add click event listener to the submit button
    const submitButton = document.getElementById("SubmitBtn");
    submitButton.addEventListener("click", onSubmit);
});
