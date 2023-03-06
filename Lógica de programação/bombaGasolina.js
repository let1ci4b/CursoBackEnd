let dinheiroCliente;
const dinheiro = 5;
let bomba = 500;
var litrosReal = 0;


do{
    dinheiroCliente = prompt("Quantos reais você tem?");
} while ((dinheiro === "" || dinheiroCliente === null && isNaN(dinheiro)));


let litrosParaAdd = prompt("Quantos litros você deseja adicionar?");
while(litrosParaAdd === "" || litrosParaAdd === null || litrosParaAdd <= 0){
    litrosParaAdd = prompt("Opção inválida! Favor inserir quantos litros deseja abastecer")
}


for(let i = 0; i < litrosParaAdd; i++){
    if(litrosParaAdd < bomba) {
        console.log("Enchendo...");
        litrosReal += dinheiro; // litrosReal = dinheiro + litrosReal
        bomba -= 1 // bomba = bomba - 1
    }
}


console.log(`Completo! R$:`+litrosReal+`\n Bomba agora em ${bomba}L`)


if(dinheiroCliente >= litrosReal) {
    alert(`O valor da gasolina foi R$:${litrosReal}. Você pagou com seus R$:${dinheiroCliente} e recebeu R$:${dinheiroCliente - litrosReal} de troco.\nA bomba agora possui ${bomba}L`);
} else{
    alert(`O valor da gasolina foi de R$:${litrosReal}. Você não teve dinheiro suficiente para pagar e agora terá que varrer o chão do nosso estabelecimento...\nA bomba continua com 500L`);
}
