const deletePostHandler = async (postId) => {
    try {
      await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
  
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  
  document.querySelector('#delete-button').addEventListener('click', async (event) => {
    event.preventDefault();
    
    const postId = document.querySelector('#post-id').value; // Ensure this matches the actual ID of the post
    await deletePostHandler(postId);
  });
  