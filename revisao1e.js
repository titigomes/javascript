var readline = require('readline')

var leitor = readline.createInterface({
        input: process.stdin,
        output:process.stdout
})


leitor.question('Entre com um numero:', function(p){
        p = parseFloat(p)
            console.log('Custa '+ p)

        leitor.close();
})