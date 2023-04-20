const loginForm = async(e) => {
    e.preventDefault();
    const username = document.querySelector('#usernameInput').value.trim();
    const password = document.querySelector('#passwordInput').value.trim();
    if(username && password){
        const response = await fetch('')
    }
}
document.querySelector('').addEventListener('submit', loginForm);