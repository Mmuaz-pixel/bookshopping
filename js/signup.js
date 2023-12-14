document.addEventListener('DOMContentLoaded', () => {

    const onSubmit = async () => {
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const nameInput = document.getElementById("name");
        const usernameInput = document.getElementById("username");

        const email = emailInput.value;
        const password = passwordInput.value;
        const name = nameInput.value;
        const username = usernameInput.value;

        await fetch('http://localhost:5000/user/signup', {
            method: 'POST', body: JSON.stringify({
                email: email, password: password, name: name, username: username
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        alert("Signup successfull")
        window.location.href = 'login.html'
    }

    const submit = document.getElementById('SubmitBtn')
    submit.addEventListener('click', onSubmit);
})