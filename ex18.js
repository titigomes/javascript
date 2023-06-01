var readline = require('readline')

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})


leitor.question('Digite sua idade ', function(idade){
        idade = parseInt(idade)

        semana = idade*52,179
        dia    = idade*365,3

        console.log('você viveu '+ semana+ ' semanas')
        console.log('voce viveu '+ dia+ ' dias')


        leitor.close()
})