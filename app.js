// app.js
const express = require('express');
const app = express();
const indexRouter = require('./services/index');
const clientesRouter = require('./services/clientes');
const produtosRouter = require('./services/produtos');
const pedidosRouter = require('./services/pedidos');

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);
app.use('/produtos', produtosRouter);
app.use('/pedidos', pedidosRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
