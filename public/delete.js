const deleteHandler = async(e) => {
    if(e){
        const id = e.target.className.split('-')[2];
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
document.querySelector('#currentProjects').addEventListener('click', deleteHandler);