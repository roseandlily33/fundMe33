const signupForm = async(e) => {
    e.preventDefault();
    const username = document.querySelector('#username');
    const password = document.querySelector('#password');
    const email = document.querySelector('#email');
    if(username && password && email){
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({username, password, email}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/profile')
        } else {
            alert(response.statusText);
        }
    }
}
document.querySelector('#signUpForm', signupForm);