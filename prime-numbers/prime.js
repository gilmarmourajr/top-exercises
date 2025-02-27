let n = prompt("Enter a number!");

// percorrer números de 1 a n usando for
// dentro de cada número, percorrer todos os números menor que ele
// se houver divisão com mod = 0, sair do loop
// caso não haja, imprimir o número

for(let i=2; i<n; i++){

    for(let j=2; j<i; j++){
        if(i % j == 0){
            break;
        } else if(j == (i-1)){
            console.log(i);
        }
    }

}