/* 

Funções - functions

sintaxe

function nome da função (parametros){
   bloco de código que você quer que seja executado quando essa função seja invocada/chamada
}

arrow function - uma forma menor de função, que a sintaxe lembra uma flecha ( )=>{}

let nome da variavel = (parametros)=>{
    bloco de código que você quer que seja executado quando essa função seja invocada/chamada
}

observação: a diferença é que ela fica dentro de uma váriavel. Outra questão é que nas arow functions, o return já está implicito nela, logo se quisermos que retorn algo podemos fazer de forma direta let somar = (num1,num2)=> num1 + num2;

*/

let subtrair = (num1, num2)=> num1 - num2;

console.log(subtrair(4,3))

function somar(num3, num4){
    return num3 + num4
}

console.log(somar(1,2)) 

