exports.paginaInicial = (req, res) =>{
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome">
    <button>Enviar</button>
    <
 `);
}

exports.trataPost = (req, res) =>{
    res.send("Sua nova rota de POST")
}