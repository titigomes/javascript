var readline = require('readline')

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})


leitor.question('Digite seu nome:', function(nome){

console.log(' Ola '+Nome+' como voce vai? Voce conhece o nao nem eu, nao, nem eu')


leitor.close();
})
