var readline = require('readline')

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})


leitor.question('Digite seu nome:', function(n1){
        nome = n1

    leitor.question('Digite Seu Salario: ', function(n1){
            salario = parseInt (n1)


        if (salario < 1300)
        {
                console.log(nome+', o desconto e de 15%, por conta do seu salario de '+ salario)
        }
        else
        {
                console.log(nome+', o desconto e de 10%, por conta do seu salario de '+salario)
        }


        leitor.close();
    })
})