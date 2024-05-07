
let nota = 7

/* if(idade > 18){
    console.log(`você é maior de idade`)
}else{
    console.log(`Você é menor de idade`)
}
 */


switch (nota) {
    case nota < 5:
        console.log('Você está reprovado!')
        break;
    case nota > 5:
        console.log("Você está na média")
        break;
    default: 
        console.log("você está aprovado!")
        break;
}