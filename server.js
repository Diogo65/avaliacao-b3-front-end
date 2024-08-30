const express = require('express');
const jsonServer = require('json-server');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname+'/dist/avaliacao-b3'));

app.get('/*',(req,res) => {
    res.sendFile(__dirname+ '/dist/avaliacao-b3/index.html');
});

app.listen(PORT, () => {
    console.log('Servidor iniciado na porta: ' + PORT);
});