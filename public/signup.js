const signupForm = async(e) => {
    e.preventDefault();
    const username = document.querySelector('#usernameSignup').value.trim();
    const email = document.querySelector('#emailSignup').value.trim();
    const password = document.querySelector('#passwordSignup').value.trim();
   
    if(username && email && password ){
        const response = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({username, email, password}),
            headers: {'Content-Type': 'application/json'},
        });
        if(response.ok){
            document.location.replace('/profile');
            console.log('Response was ok')
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signupForm').addEventListener('submit', signupForm);