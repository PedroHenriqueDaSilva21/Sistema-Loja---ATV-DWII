// routes/produtos.js
const express = require('express');
const router = express.Router();

const produtos = [
  { nome: 'Produto 1', preco: 'R$ 10,00', categoria: 'Categoria A' },
  { nome: 'Produto 2', preco: 'R$ 20,00', categoria: 'Categoria B' },
  { nome: 'Produto 3', preco: 'R$ 30,00', categoria: 'Categoria C' },
  { nome: 'Produto 4', preco: 'R$ 40,00', categoria: 'Categoria D' }
];

router.get('/', (req, res) => {
  res.render('produtos', { produtos });
});

module.exports = router;
