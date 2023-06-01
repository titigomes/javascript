var readline = require('readline')

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})

leitor.question ("Digite n1:", function (num1){
    n1= parseInt (num1);

    leitor.question ("Digite n2:", function (num2){
        n2= parseInt (num2);

        leitor.question ("Digite n3:", function (num3){
            n3= parseInt (num3);
            n = [n1,n2,n3];
            console.log(s);
            leitor.close();

        })
    })           
})