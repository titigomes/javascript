var readline = require('readline')

var leitor = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

leitor.question('Digite o raio do circulo: ', function(raio){
    raio = parseFloat(raio)

    area = Math.pow(raio, 2)
    area = area*3.1415926535898;

    console.log('A area do circulo é: '+ area)

    leitor.close();
});