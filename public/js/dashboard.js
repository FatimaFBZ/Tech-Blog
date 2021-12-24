const articleFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#create-title').value.trim();
    const content = document.querySelector('#create-content').value.trim();
  
    if (title && content) {
      const response = await fetch('/api/articles', {
        method: 'POST',
        body: JSON.stringify({ title , content}),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in.');
      }
    }
  };
  
  
  document
    .querySelector('.article-form')
    .addEventListener('submit', articleFormHandler);
  
  
  