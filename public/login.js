const loginForm = async(e) => {
    e.preventDefault();
    const username = document.querySelector('#usernameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
    if(username && password){
        const response = await fetch('/api/users/login',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-Type': 'application/json'},
        })
    
    if(response.ok){
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
    };

}

const signupForm = async(e) => {
    e.preventDefault();
    const username = document.querySelector('#usernameInput').value.trim();
    const email = document.querySelector('#emailInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
   
    if(username && email && password ){
        console.log(username, email, password)
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

document.querySelector('#signUpForm').addEventListener('submit', signupForm);
document.querySelector('#loginForm').addEventListener('submit', loginForm);