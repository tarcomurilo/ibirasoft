document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const errorMessage = document.getElementById('errorMessage');
  const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
  const createAccountBtn = document.getElementById('createAccountBtn');

  loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    errorMessage.style.display = 'none';

    const login = document.getElementById('login').value;
    const senha = document.getElementById('senha').value;

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login, senha }),
      });

      const data = await response.json();

      if (data.success) {
        window.location.href = '/dashboard';
      } else {
        errorMessage.textContent = data.message;
        errorMessage.style.display = 'block';
      }
    } catch (error) {
      errorMessage.textContent = 'Erro ao conectar com o servidor';
      errorMessage.style.display = 'block';
    }
  });

  forgotPasswordBtn.addEventListener('click', function() {
    alert('Funcionalidade em desenvolvimento');
  });

  createAccountBtn.addEventListener('click', function() {
    alert('Funcionalidade em desenvolvimento');
  });
});
