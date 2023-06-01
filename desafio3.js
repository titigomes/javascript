limite = 100
a = 0
b = 1

for (i=0; i<limite; i++){
    console.log(a)
    b = a + b
    a = b - a
}