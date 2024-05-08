/* 

sintaxes Condicionais

-if (se), else (se não) e else if

usando apenas o if e else
if(condição se ocorrer ela executará o código){

}else{

}

usando if, else if e else

if(){

}else if(){

}else

}

- switch(){
    case valor:
        ação a ser executada se o valor da case for igual;
        break;
    case valor:
       ação a ser executada se o valor da case for igual;
       break;
    default:
        se não for nenhuma das ações anteriores caira nessa;
        break; O break aqui é opcional
}    


- tenário
variavel condição ? se a condição for verdadeira faça isso : se não for faça isso;
let media = 7

media > 7 ? console.log('você foi aprovado') : Console.log('Você foi reprovado');

*/


    
/* if(idade > 18){
    console.log(`você é maior de idade`)
}else{
    console.log(`Você é menor de idade`)
}
 */


let nota = 5


/* switch (nota) {
    case 7:
        console.log('Você está aprovado!');
        break;
    case  5:
        console.log("Você está na reprovado");
        break;
    default: 
        console.log("você está em recuperação!");
        break;
} */

nota > 5 ? console.log('Você foi aprovado') : console.log('Você foi reprovado')