var readline = require('readline')

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})



leitor.question('Digite um numero: ', function(n1){
        n1 = parseFloat(n1)
leitor.question('Digite Outro Numero: ', function(n2){
        n2 = parseFloat(n2)

        if (n1 > n2){
            console.log('O numero: '+n1+' É maior que o numero: '+ n2)
        }else if (n2 > n1){
            console.log('O numero: '+n2+' É maior que o numero: '+ n1)
        }else{
            console.log('Os numero são Iguais...')
        }

        leitor.close();

})
})