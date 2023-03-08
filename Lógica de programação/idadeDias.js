do{
        idade = prompt("Quantos anos você tem?");
        } while(idade == null || idade == " " || idade == "" || isNaN(idade))
        dias = idade*365;
        alert(`Sua idade é de ${dias} dias`);
    
