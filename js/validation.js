// auth.js
document.addEventListener('DOMContentLoaded', function () {
  const token = localStorage.getItem('user_id');

  if (!token) {
    // Redirect to the login page if no token is found
    window.location.href = 'login.html';
  }
});
