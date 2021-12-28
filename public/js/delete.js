const deleteurl= window.location.pathname;
const deleteid= url.substring(deleteurl.lastIndexOf('/')+1)
console.log('delete id'+ deleteid);

const deleteArticle = async (event) => {
    event.preventDefault();
  
  
    if (deleteid) {
      const response = await fetch(`/api/articles/${deleteid}`, {
        method: 'DELETE',
        body: JSON.stringify({ 
            deleteId: deleteid,
                 }),
        headers: { 'Content-Type': 'application/json' },
      });
  console.log('check response', response)
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete.');
      }
    }
  };
  
  
  document
    .querySelector('.deleteBtn')
    .onclick =  deleteArticle;
    
  
  
  