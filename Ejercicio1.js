
const prompt = require('prompt-sync')();

let num1 = parseFloat(prompt("Ingresa el primer número:"));
let num2 = parseFloat(prompt("Ingresa el segundo número:"));
let num3 = parseFloat(prompt("Ingresa el tercer número:"));

let numeros = [num1, num2, num3];

if (num1 === num2 && num2 === num3) {
    console.log("Los tres números son iguales:", num1, num2, num3);
} else {
    for(i = 0; i < numeros.length; i++){
        for(j = 0; j < numeros.length; j++){
            if(numeros[j] < numeros[j+1]){
                let menor = numeros[j];
                numeros[j] = numeros[j+1];
                numeros[j+ 1] = menor;

            }
            console.log(numeros);

        }
    }
    
    console.log("Números ordenados de mayor a menor:", numeros.join(", "));
    
    let mayor = numeros[0]; 
    numeros[0] = numeros[2];   
    numeros[2] = mayor;

    console.log("Números ordenados de menor a mayor:", numeros.join(", "));

}
