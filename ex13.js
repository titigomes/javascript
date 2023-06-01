var readline = require('readline')

var leitor = readline.createInterface({
        input: process.stdin,
        output: process.stdout
})

leitor.question('Digite sua temperatura em celsius: ', function(c1){
        c1 = parseFloat(c1);
        
        fah = ((c1*9/5)+32);
		kev = (c1+273.15);
		rea = (c1* 4/5);
		ran = (c1*9/5+491.67);

        console.log('Sua temperatura º'+c1+ ' Em:')

        console.log("A temperatura Em celsius: º"+c1+":");
		console.log("em fahrenheit: º"+fah);
		console.log("em kelvin: º"+kev);
		console.log("em reaumur: º"+rea);
		console.log("em rankine: º"+ran);

        leitor.close();
})