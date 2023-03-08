 do{
        num1 = prompt("Digite um número:");
        } while(num1 == null || num1 == "" || num1 == " " || isNaN(num1))
        do{
        num2 = prompt("Digite outro número:");
        } while(num2 == null || num2 == "" || num2 == " " || isNaN(num2))
   
        if(num1 > num2){
            alert(`${num1} é maior que ${num2}`);
        }
        else if(num1 < num2){
            alert(`${num1} é menor que ${num2}`);
         }
        else if(num1 == num2){
            alert(`${num1} e ${num2} são iguais`);
        }
