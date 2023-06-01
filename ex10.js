var readline = require('readline')

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})

leitor.question('Digite Um Numero: ', function(n1){
    n1 = parseInt(n1);

    for (i = 1; i <= 1000; i++) {
		if (((n1 % i) ==0)) {
            console.log("O número " + n1 + " é Divisivel por: "+ i);
			}
		}
        leitor.close();
});