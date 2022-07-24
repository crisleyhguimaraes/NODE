const express = require ('express'); // import express
const app = express(); // create express app

app.listen(2022, function(erro) {
    if (erro) {
        console.log('Erro ao iniciar o servidor');
    } else {
        console.log('Servidor iniciado com sucesso');
    }
})
