var readline = require('readline')

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})


leitor.question('Digite sua temperatura', function(ten){
        ten = parseInt(ten)

     if (ten<18)
     {
           console.log('Nossa esta frio')
     }
     else if (ten >24 )      
     {
        console.log("Nossa esta quente")
     }
     else
     {
        console.log('O cilma esta agradavel')
     }

        leitor.close();
})