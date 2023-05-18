//carregando express
const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')
app.use(routes)
app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
)
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('views', path.resolve(__dirname, 'src', 'views')) //buscando o arquivo de view
app.set('view engine', 'ejs')


app.listen(3000, () =>{
    console.log('acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
})
