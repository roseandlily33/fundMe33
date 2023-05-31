const formHandler = async(e) => {
    e.preventDefault();
    const name = document.querySelector('#projectName').value.trim();
    const description = document.querySelector('#description').value.trim();
    const needed_funding = document.querySelector('#neededFunding').value.trim();
    

    if(name&& needed_funding && description){
        console.log(name, needed_funding, description)
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({name, description, needed_funding}),
            headers: {
                'Content-Type' : 'application/json',
            }
        });
        console.log('RESPoNSE',response);
        if(response.ok){
            document.location.replace('/profile');
        } else {
            alert('Failed to create the project');
        }
    }
};



document.querySelector('#newProject').addEventListener('submit', formHandler);
