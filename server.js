const express = require('express');
const app = express();
const PORT = 3001;

//DatabaseLink
const db = require('./database');

app.get('/', (req, res) => {
  res.send('Backend está funcionando!');
});

app.listen(PORT, () => {
  console.log(`Servidor backend está rodando na porta ${PORT}`);
});
