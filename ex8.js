var readline = require('readline');

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})

const novaData = new Date

    console.log(novaData.toLocaleString('pt-BR', { timezone: 'UTC' }));

leitor.question('Digite Seu Nome:', function(nome){
    
leitor.question('Qual É sua Data De Nascimento: ', function(novaData){

    console.log('Ola,'+nome+' Tudo Bem?') 
    novadata = Date.parse

leitor.question('Digite sua Primeira Nota:', function(num){
    n1 = parseFloat(num)
leitor.question('Digite Sua Outra nota: ', function(num){
    n2 = parseFloat(num)
   
    n3= (n1+n2)/2

    console.log('Bom '+nome+' A sua Media Foi de:')
    console.log(n3)
    console.log('Sua Data De Nascimento: '+ novaData);

        leitor.close();

            });
        });
    });
});
