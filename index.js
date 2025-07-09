document.getElementById('cadastro-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('cadastro-email').value;
  const password = document.getElementById('cadastro-senha').value;
  const resultDiv = document.getElementById('result');

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    const text = await response.text();
    resultDiv.textContent = text;
  } catch (error) {
    resultDiv.textContent = 'Erro ao enviar dados: ' + error.message;
  }
});

// Alternar entre login e cadastro
function mostrarCadastro() {
  document.getElementById('login-container').style.display = 'none';
  document.getElementById('cadastro-container').style.display = 'block';
}

function mostrarLogin() {
  document.getElementById('cadastro-container').style.display = 'none';
  document.getElementById('login-container').style.display = 'block';
}

// Enviar formulário de cadastro
document.getElementById('cadastro-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('cadastro-email').value;
  const senha = document.getElementById('cadastro-senha').value;
  const resultDiv = document.getElementById('cadastro-result');

  try {
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    const text = await response.text();
    resultDiv.textContent = text;
  } catch (error) {
    resultDiv.textContent = 'Erro ao cadastrar: ' + error.message;
  }
});

// Enviar formulário de login
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const senha = document.getElementById('login-senha').value;
  const resultDiv = document.getElementById('login-result');

  try {
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    const text = await response.text();
    resultDiv.textContent = text;
  } catch (error) {
    resultDiv.textContent = 'Erro ao fazer login: ' + error.message;
  }
});
