//1
function repete(elemento, vezes){
    var array = [];


    for(i = 0; i<vezes; i++){
        array.push(elemento);
    }

    console.log(array);
}

repete(7, 3);


//2
function plus(numero){
    var plus = [];
   
    for(i=0; i<numero; i++){
        plus.push("+");
    }

    console.log(plus);
}

plus(5);


//3
function plus2(numero){
    return Array(numero).fill('+').join(''); // fill: completar // join: tirar
}

console.log(plus2(4));


//4
function plus3(quantidade, repetir = '+'){
    console.log(repetir.repeat(quantidade))
}

plus3(5)


//5
function priUm(entrada){
   
    var saida = [entrada[0], entrada[entrada.length -1]];
    console.log(saida);
}

priUm(["oi", 2, "tchau"]);
