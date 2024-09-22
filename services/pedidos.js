// routes/pedidos.js
const express = require('express');
const router = express.Router();

const pedidos = [
  { numero: 1, valor: 'R$ 100,00' },
  { numero: 2, valor: 'R$ 150,00' },
  { numero: 3, valor: 'R$ 200,00' },
  { numero: 4, valor: 'R$ 250,00' }
];

router.get('/', (req, res) => {
  res.render('pedidos', { pedidos });
});

module.exports = router;
