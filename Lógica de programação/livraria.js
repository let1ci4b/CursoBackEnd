let dataCompra;
let ISBN;
let nomeLivro;
let autorLivro;
let editoraLivro;
let generoLivro;
let quantLivro = 5000;
var pontosCompra = 0;
let cpfClie;
let nomeClie;
let telefoneClie;
var condicao = 0;
let escolha = "0";

while((escolha != "5")){

do{
    escolha = prompt("Bem vindo! O que você deseja fazer hoje?\n1.Registrar compra\n2.Editar estoque\n3.Cadastrar cliente\n4.Cadastrar livro\n5.Sair do sistema\n\nDIGITE 'CANCELAR' QUANDO DESEJAR VOLTAR AO MENU");
} while ((escolha === "" || escolha === null));

switch (escolha){
    case "1":
        console.log("Registrando compra...");
        do{
        dataCompra = prompt("Data da compra:");
        } while ((dataCompra === "" || dataCompra === null ));
        if(dataCompra == "cancelar" || dataCompra == "Cancelar" || dataCompra == "CANCELAR") {
            break;
        }
        do{
        cpfClie = prompt("CPF do cliente:");
        } while ((cpfClie === "" || cpfClie === null || isNaN(cpfClie) && cpfClie != "cancelar"));
        if(cpfClie == "cancelar" || cpfClie == "Cancelar" || cpfClie == "CANCELAR") {
            break;
        }
        do{
        ISBN = prompt("ISBN:");
        } while ((ISBN === "" || ISBN === null || isNaN(ISBN) && ISBN != "cancelar"));
        if(ISBN == "cancelar" || ISBN == "Cancelar" || ISBN == "CANCELAR") {
            break;
        }
        do{
            pontosCompra = prompt("Pontos compra:");
        } while ((pontosCompra) === "" || pontosCompra === null || isNaN(pontosCompra && pontosCompra != "cancelar"));
            if(pontosCompra == "cancelar" || pontosCompra == "Cancelar" || pontosCompra == "CANCELAR") {
                break;
            }
        quantLivro -= 1;
        alert(`COMPRA REGISTRADA!\nData: ${dataCompra}\nCliente: ${cpfClie}\nISBN: ${ISBN}\nRecompensa: ${pontosCompra} pontos\nO estoque agora possui ${quantLivro} livros.`);
        break;
       
   
    case "2":
        console.log("Editando estoque...");
        do{
        quantLivro = prompt("O estoque possuia "+quantLivro+" livros na sua última atualização. Informe quantos livros ele possui agora:");
        } while ((quantLivro === "" || quantLivro === null || isNaN(quantLivro) && quantLivro != "cancelar"));
        if(quantLivro == "cancelar" || quantLivro == "Cancelar" || quantLivro == "CANCELAR") {
            break;
        }
        alert(`Agora o estoque possui ${quantLivro} livros.`);
        break;


    case "3":
        console.log("Cadastrando cliente...");
        do{
            nomeClie = prompt("Nome:");
            } while ((nomeClie === "" || nomeClie === null || /^[0-9]+$/.test(nomeClie)));
        if(nomeClie == "cancelar" || nomeClie == "Cancelar" || nomeClie == "CANCELAR") {
            break;
        }
        do{
            cpfClie = prompt("CPF:");
            } while ((cpfClie === "" || cpfClie === null || isNaN(cpfClie) && cpfClie != "cancelar"));
        if(cpfClie == "cancelar" || cpfClie == "Cancelar" || cpfClie == "CANCELAR") {
            break;
        }
        do{
            telefoneClie = prompt("Telefone:");
            } while ((telefoneClie === "" || telefoneClie === null || isNaN(telefoneClie) && telefoneClie != "cancelar"));
        if(telefoneClie == "cancelar" || telefoneClie == "Cancelar" || telefoneClie == "CANCELAR") {
            break;
        }
        alert(`CLIENTE CADASTRADO!\nNome: ${nomeClie}\nCPF: ${cpfClie}\nTelefone: ${telefoneClie}`);
        break;


    case "4":
        console.log("Cadastrando livro...");
        do{
            nomeLivro = prompt("Nome:");
            } while ((nomeLivro === "" || nomeLivro === null || /^[0-9]+$/.test(nomeLivro)));
        if(nomeLivro == "cancelar" || nomeLivro == "Cancelar" || nomeLivro == "CANCELAR") {
            break;
        }
        do{
            ISBN = prompt("ISBN:");
            } while ((ISBN === "" || ISBN === null || isNaN(ISBN) && ISBN != "cancelar"));
        if(ISBN == "cancelar" || ISBN == "Cancelar" || ISBN == "CANCELAR") {
            break;
         }
        do{
            generoLivro = prompt("Gênero:");
            } while ((generoLivro === "" || generoLivro === null || /^[0-9]+$/.test(generoLivro)));
        if(generoLivro == "cancelar" || generoLivro == "Cancelar" || generoLivro == "CANCELAR") {
            break;
         }
        do{
            autorLivro = prompt("Autor(a):");
            } while ((autorLivro === "" || autorLivro === null || /^[0-9]+$/.test(autorLivro)));
        if(autorLivro == "cancelar" || autorLivro == "Cancelar" || autorLivro == "CANCELAR") {
            break;
        }
        do{
            editoraLivro = prompt("Editora:");
        } while ((editoraLivro === "" || editoraLivro === null || /^[0-9]+$/.test(editoraLivro)));
        if(editoraLivro == "cancelar" || editoraLivro == "Cancelar" || editoraLivro == "CANCELAR") {
            break;
        }
        alert(`LIVRO CADASTRADO!\nNome: ${nomeLivro}\nISBN: ${ISBN}\nGênero: ${generoLivro}\nAutor(a): ${autorLivro}\nEditora: ${editoraLivro}`);
        break;
   
    default:
        break;
}
}
