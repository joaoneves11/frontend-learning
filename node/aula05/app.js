const path = require('path');
//CAMINHO
const caminhoArquivo = path.resolve(__dirname, 'teste.txt');

//importando função de escrever
const escreve = require('./modulo/escrever')
const ler = require('./modulo/ler')
//criando JSON
// const pessoas = [
//     {nome: 'João' },
//     {nome: 'Maria' },
//     {nome: 'Luiza' },
//     {nome: 'Pedro' },
// ];

// const json = JSON.stringify(pessoas, '', 2);
// escreve(caminhoArquivo, json)

async function lerArq(caminho){
    const dados = await ler(caminho)
    renderizaDados(dados);
}
function renderizaDados(dados){
    //TRANSFORMANDO EM OBJETO NOVAMENTE
    dados = JSON.parse(dados);
    dados.forEach(val => console.log(val))
}
lerArq(caminhoArquivo)
