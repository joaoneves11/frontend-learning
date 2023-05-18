//variáveis de modulos


console.log(__filename) //mostra o caminho + o nome do arquivo
console.log(__dirname) //mostra o diretório da pasta atual que está no momento


const path = require('path');
console.log(path.resolve(__dirname, '..', '..', 'arquivos', 'imagens'));
