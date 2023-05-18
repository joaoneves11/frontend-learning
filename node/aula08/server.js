//carregando express
const express = require('express');
const app = express();

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)
app.post('/', (req, res) =>{
    console.log(req.body);
    res.send(`o que você enviou foi: ${req.body.nome}`)//pegando o input nome pelo name="nome"
})
//CRUD - > CREATE, READE, UPDATE, DELETE
//         POST,   GET,   PUT,    DELETE

// http://meusite.com/ -< gET - > Entregue a página /
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
//          requisição / resposta
app.get('/', (req, res) => {
     res.send(`
        <form action="/" method="POST">
        Nome do Cliente: <input type="text" name="nome">
        <button>Enviar</button>
        <
     `);
})

//pegando o parâmetro passado na URL
//fazendo parâmetro ser opcional => '/testes/:idUsuarios?/:parametro?
app.get('/testes/:idUsuarios?/:parametros?', (req, res) => {
     console.log(req.query);
    //res.send(req.query.nome) //pegando uma querystring específica
    //  res.send(req.params.parametros) //pegando uma parametro específico
    res.send(req.query.nome) //pegando uma querystring específica
})


// app.post('/', (req, res) =>{
//     res.send('recebi o formulário')
// })
app.get('/contato', (req, res) =>{
    res.send("obrigado por entrar em contato com a gente.")
})
app.listen(3000, () =>{
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
