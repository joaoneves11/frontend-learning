//importando

const app1 = require('./app')

console.log(app1.falaNOME())

//importando algo específico



const app2 = require('./app').falaNOME

console.log(app2)

//ou:

const falaNome = app1.falaNOME();
console.log(falaNome)