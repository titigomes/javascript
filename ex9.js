var readline = require('readline');

var leitor = readline.createInterface({
        input: process.stdin,
        output :process.stdout
})

leitor.question('Digite seu nome : ', function(nome){

leitor.question('Digite Sua Idade: ',function(n1){
    idade = parseInt(n1)

    if (idade > 17){
            console.log(nome+', voce pode comprar cachaça!');
    }else {
            console.log(nome, 'não compre cachaça!');
    }

        leitor.close();
    })
});