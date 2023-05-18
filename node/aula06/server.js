//carregando express
const express = require('express');
const app = express();


//CRUD - > CREATE, READE, UPDATE, DELETE
//         POST,   GET,   PUT,    DELETE

// http://meusite.com/ -< gET - > Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
//          requisição / resposta
app.get('/', (req, res) => {
     res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        <
     `);
})

app.post('/', (req, res) =>{
    res.send('recebi o formulário')
})
app.get('/contato', (req, res) =>{
    res.send("obrigado por entrar em contato com a gente.")
})
app.listen(3000, () =>{
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
