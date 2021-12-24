const deleteurl= window.location.pathname;
const deleteid= url.substring(deleteurl.lastIndexOf('/')+1)
console.log('delete id'+deleteid);

const deleteArticle = async (event) => {
    event.preventDefault();
  
  
    if (id) {
      const response = await fetch(`/api/postArticles/${deleteid}`, {
        method: 'DELETE',
        body: JSON.stringify({ 
            deleteId: id,
                 }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to delete.');
      }
    }
  };
  
  
  document
    .querySelector('.deleteBtn')
    .addEventListener('submit', deleteArticle);
  
  
  