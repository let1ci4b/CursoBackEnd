do{
    jogador1 = prompt("Jogador 1: Digite pedra, papel ou tesoura").toLowerCase();
    jogador2 = prompt("Jogador 2: Digite pedra, papel ou tesoura").toLowerCase();


    cond = true;
   
if (jogador1 == "pedra") {
     if (jogador2 == "tesoura") {
        alert ("Jogador 1 ganha!\nPedra quebra tesoura");
        do{
            repete = prompt("Deseja jogar novamente?\ns/n");
        } while(repete != "s" && repete != "n")
        if(repete == "n"){
        cond = false;
        }
    } else if (jogador2 == "papel"){
        alert ("Jogador 2 ganha!\nPapel envolve a Pedra");
        do{
            repete = prompt("Deseja jogar novamente?\ns/n");
        } while(repete != "s" && repete != "n")
        if(repete == "n"){
        cond = false;
        }
    } else if (jogador2 == "pedra") {
        alert ("Nenhum jogador ganha!\nEmpate");
        do{
            repete = prompt("Deseja jogar novamente?\ns/n");
        } while(repete != "s" && repete != "n")
        if(repete == "n"){
        cond = false;
        }
    }


}
 else if (jogador1 == "tesoura") {
    if (jogador2 == "pedra") {
        alert ("Jogador 2 ganha!\nPedra quebra tesoura");
        do{
            repete = prompt("Deseja jogar novamente?\ns/n");
        } while(repete != "s" && repete != "n")
        if(repete == "n"){
        cond = false;
        }
    } else if (jogador2 == "papel"){
        alert ("Jogador 1 ganha!\nTesoura corta papel");
        do{
            repete = prompt("Deseja jogar novamente?\ns/n");
        } while(repete != "s" && repete != "n")
        if(repete == "n"){
        cond = false;
        }
    } else if (jogador2 == "tesoura") {
        alert ("Nenhum jogador ganha!\nEmpate");
        do{
            repete = prompt("Deseja jogar novamente?\ns/n");
        } while(repete != "s" && repete != "n")
        if(repete == "n"){
        cond = false;
        }
    }
}


 else if (jogador1 == "papel"){
    if (jogador2 == "pedra") {
        alert ("Jogador 1 ganha!\nPapel envolve pedra");
        do{
            repete = prompt("Deseja jogar novamente?\ns/n");
        } while(repete != "s" && repete != "n")
        if(repete == "n"){
        cond = false;
        }
    }else if (jogador2 == "tesoura") {
        alert ("Jogador 2 ganha!\nTesoura corta papel");
        do{
            repete = prompt("Deseja jogar novamente?\ns/n");
        } while(repete != "s" && repete != "n")
        if(repete == "n"){
        cond = false;
        }
    }else if (jogador2 == "papel")  {
        alert ("Nenhum jogador ganha!\nEmpate");
        do{
            repete = prompt("Deseja jogar novamente?\ns/n");
        } while(repete != "s" && repete != "n")
        if(repete == "n"){
        cond = false;
        }
    }


}


}while(cond == true)
