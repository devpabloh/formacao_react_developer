/* 

Laços de repetição
for (para)
while (enquanto)
forEach (para cada)
map (mapa) - retorna o resultado dentro de um array

*/


for(let i = 1; i < 5; i++){
    console.log(`Valor de ${i}`)
}

console.log('____________________________________________________')

let x = 1;

while(x <= 5){
    console.log(`Valor de ${x}`)
    x++
}

console.log('____________________________________________________')

const valores = [1,2,3,4,5,6,7,8,9,10]

valores.forEach((value)=>{
    console.log(`valor de ${value}`)
})

console.log('____________________________________________________')

const valores2 = [1,2,3,4,5,6,7,8,9,10]
const resultado =  valores2.map((value)=>{
    return value * 2;
})

console.log(resultado)