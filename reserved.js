// reserved/reserved.js

const form = document.getElementById('password-form');
const modal = document.getElementById('password-modal');
const blurredContent = document.getElementById('blurred-content');
const errorMessage = document.getElementById('error-message');
const passwordInput = document.getElementById('password-input');

// Check if user is already authenticated on page load
function checkAuthStatus() {
  if (document.cookie.includes('auth=valid')) {
    // User is already logged in
    blurredContent.classList.remove('blur-sm', 'pointer-events-none');
    modal.style.display = 'none';
  }
}

// Handle password form submission
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errorMessage.classList.add('hidden');

  const password = passwordInput.value;

  try {
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ password })
    });

    if (response.ok) {
      // Success - unlock the content
      blurredContent.classList.remove('blur-sm', 'pointer-events-none');
      modal.style.display = 'none';
      passwordInput.value = '';
    } else {
      // Wrong password
      errorMessage.classList.remove('hidden');
      passwordInput.value = '';
      passwordInput.focus();
    }
  } catch (error) {
    errorMessage.textContent = 'Something went wrong. Please try again.';
    errorMessage.classList.remove('hidden');
  }
});

// Run auth check when page loads
checkAuthStatus();