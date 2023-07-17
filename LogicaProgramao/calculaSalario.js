 do{
        horas = prompt("Quantas horas você trabalhou esse mês?");
        } while(horas == null || horas == "" || horas == " " || isNaN(horas))
        do{
        valor = prompt("Quantos reais você recebe por hora?");
        }while(valor == null || valor == " " || valor == "" || isNaN(valor))
        salario = horas*valor;
        alert(`Seu salário esse mês é R$:${salario}`);
