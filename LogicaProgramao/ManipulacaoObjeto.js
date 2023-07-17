//1
let Carlos = {
    nome: "Carlos",
    idade: 20,
    trabalhando: true
}

// função com Spread: chama o conteúdo completo
function copiarLista(nomeDoObjeto, propriedadeDoObjeto){
    const copia = {...nomeDoObjeto};
    delete copia[propriedadeDoObjeto];
    return copia;
}

console.log(copiarLista(Carlos, "idade"))

//2
var carro = new Object();
carro.ano = '2020';
carro.marca = 'Ford';

function removerProp(meuObj, propriedade){ //removendo uma propriedade do objeto
    if(meuObj.hasOwnProperty(propriedade)){
        delete meuObj[propriedade];
    } else{
        console.log("O objeto não contém essa propriedade.");
    }
    console.log(meuObj);
}
console.log(carro);
removerProp(carro, 'ano');
