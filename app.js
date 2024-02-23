/*console.log("Mensagem de texto!")

var n1 =5
var n2 =5

var adicao = n1 + n2
var subtracao = n1 - n2
var mult = n1 * n2
var div = n1 / n2

console.log ("Adição: " +adicao)
console.log ("Subtração: " +subtracao)
console.log ("Multiplicação: " +mult)
console.log ("Dvisão: " +div)
*/

/*var n1 =10

if (n1 <= 10){
    console.log("Certo, menor ou iugal que 10")
}else{
    console.log("Errado, maior que 10")
}
*/


/*
for(var n1 = 0;n1<=10;n1++){
    console.log("N1: " + n1)
}
*/

/*
var n1 =0
do {
    console.log("N1: "+n1)
    n1++
}while(n1 <=10)
*/

var adicao = require('./adicao')
console.log(adicao(10,2))


var subtracao = require('./subtracao')
console.log(subtracao(10,2))


var mult = require('./mult')
console.log(mult(10,2))


var div = require('./div')
console.log(div(10,2))



