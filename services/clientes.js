// routes/clientes.js
const express = require('express');
const router = express.Router();

const clientes = [
  { nome: 'João Silva', cpf: '123.456.789-00', endereco: 'Rua A, 123' },
  { nome: 'Maria Oliveira', cpf: '987.654.321-00', endereco: 'Rua B, 456' },
  { nome: 'Carlos Souza', cpf: '456.789.123-00', endereco: 'Rua C, 789' },
  { nome: 'Ana Santos', cpf: '321.654.987-00', endereco: 'Rua D, 101' }
];

router.get('/', (req, res) => {
  res.render('clientes', { clientes });
});

module.exports = router;
