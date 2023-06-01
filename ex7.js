var readline = require('readline');

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})


leitor.question('Digite o primeiro numero:', function(num){
    n1 = num;
leitor.question('Digite o segundo:', function(num){
    n2 = num;
leitor.question('Digite o terceiro:', function(num){
    n3 = num;

    n4 = (n2*n3)/n1;

    console.log(n1+'     '+n3);
    console.log('-----------');
    console.log(n2+'     '+n4);
        
    leitor.close();

        });
    });
});
