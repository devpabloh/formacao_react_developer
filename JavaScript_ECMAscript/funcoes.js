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

let alunos = [
    {
        nome:"Roberto",
        idade:16,
    },
    {
        nome: "Pablo",
        idade: 18,

    },
    {
        nome: 'Tais',
        idade: 15,

    },
    {
        nome: "Neide",
        idade: 25,

    },
    {
        nome: 'Teo',
        idade: 5,
    },
]

/* 

Funcionalidades do ES6+

-filter () filtra determinado chave ou valor que foi solicitado 

-find () retorna o primeiro item que foi encontrado dentro do array/objeto 

-findindex() retorna o index, ou seja, o numero do indexador aonde se encontra o valor/parametro que foi solicitado

- reduce() Quando queremos pegar algum tipo de informação e fazer um calcúlo
sintaxe
const idades = alunos.reduce((acc, aluno)=>{
    return acc + aluno.idade
},0)

- some() retorna true, se apenas uma condição for verdadeira

let acimaDeNove = alunos.some(alunos => alunos.idade < 10);

- every() retorna true, se todas as condições forem verdadeira

let acimaDeNove = alunos.every(alunos => alunos.idade < 60);
*/