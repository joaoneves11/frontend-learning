const nome = 'joao'

const falaNOME = () => nome

module.exports.nome = nome;


exports.NOMEREFERENCIADO = nome;
exports.falaNOME = falaNOME;
//this referencia ao exports
this.qualquerCoisa = 'o que eu quiser exportar'

