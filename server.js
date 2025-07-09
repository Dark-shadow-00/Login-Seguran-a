const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const usuarios = [];


function validarEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
function validarSenha(senha) {
  return typeof senha === 'string' && senha.length >= 6;
}

app.post('/register', async (req, res) => {
  const { email, senha } = req.body;
  if (!validarEmail(email)) {
    return res.status(400).send('Email inválido.');
  }
  if (!validarSenha(senha)) {
    return res.status(400).send('A senha deve ter pelo menos 6 caracteres.');
  }
  const existente = usuarios.find(u => u.email === email);
  if (existente) {
    return res.status(400).send('Usuário já cadastrado.');
  }
  const hash = await bcrypt.hash(senha, 10);
  usuarios.push({ email, senha: hash });
  res.send('Cadastro realizado com sucesso!');
});

app.post('/login', async (req, res) => {
  const { email, senha } = req.body;
  const usuario = usuarios.find(u => u.email === email);
  if (!usuario) {
    return res.status(401).send('Email ou senha inválidos.');
  }
  const senhaCorreta = await bcrypt.compare(senha, usuario.senha);
  if (!senhaCorreta) {
    return res.status(401).send('Email ou senha inválidos.');
  }
  res.send('Login bem-sucedido!');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});