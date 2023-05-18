const fs = require('fs').promises;

//Função para escrever no arquivo
module.exports = (caminhos, dados) =>{
    fs.writeFile(caminhos, dados, {flag : 'w'});

}

//flag: w serve para apagar tudo que tem no teste.txt caso ele existir e escrever novamente
//flag: a serve para criar uma nova frase com o que já existe no txt.

