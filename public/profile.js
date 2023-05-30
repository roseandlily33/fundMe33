const formHandler = async(e) => {
    e.preventDefault();
    const name = document.querySelector('').value.trim();
    const needed_funding = document.querySelector('').value.trim();
    const description = document.querySelector('').value.trim();

    if(name&& needed_funding && description){
        const response = await fetch(`/api/projects`, {
            method: 'POST',
            body: JSON.stringify({name, needed_funding, description}),
            headers: {
                'Content-Type' : 'application/json',
            }
        });
        if(response.ok){
            document.location.replace('/profile');
        } else {
            alert('Failed to create the project');
        }
    }
};

const deleteHandler = async(e) => {
    if(e.target.hasAttribute('data-id')){
        const id = e.target.getAttribute('data-id');
        const response = await fetch(`/api/projects/${id}`, {
            method: 'DELETE',
        });
        if(response.ok){
            document.location.replace('/profile');
        } else {
            alert('Failed to delete the project');
        }
    }
};
console.log('The query selectors neeed to be added for delete and submit')
document.querySelector('').addEventListener('submit', formHandler);
document.querySelector('').addEventListener('submit', deleteHandler);