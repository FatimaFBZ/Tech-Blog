const url= window.location.pathname;
const id= url.substring(url.lastIndexOf('/')+1)

const updateFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#update-title').value.trim();
    const content = document.querySelector('#update-content').value.trim();
  
    console.log(id);
    if (title && content) {
      const response = await fetch(`/api/articles/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ title , content}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to update.');
      }
    }
  };
  
  
  document
    .querySelector('.update-form')
    .addEventListener('submit', updateFormHandler);
  
  
  