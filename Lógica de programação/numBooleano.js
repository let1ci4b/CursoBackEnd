entrada = prompt("Digite um número ou um booleano");
        if(entrada == "false" || entrada == "true"){
            if(entrada == "false"){
                entrada = false;
        }
        else if(entrada == "true"){
            entrada = true;
        }
        alert(`${!entrada}`);
        }
        else if(entrada >= 0 || entrada < 0){
            entrada = parseFloat(entrada);
            entrada = entrada * -1;
            alert(`${entrada}`);
        }
        else{
            alert(`Booleano ou número esperados, mas o parâmetro é do tipo String`);
        }
