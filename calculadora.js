
    function reset() {
        document.querySelector('span').innerHTML = "";
    }
    
    function show(numb) {
        var numero = document.querySelector('span').innerHTML;
        document.querySelector('span').innerHTML = numero + numb;
    }
    
    function result() {
        var resultado = document.querySelector('span').innerHTML;
        if (resultado) {
            document.querySelector('span').innerHTML = eval(resultado);
        }
    }
