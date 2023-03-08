function inclusivoN (numero, minimo, maximo, inclusivo){
        if(inclusivo == true){
            if(numero >= minimo && numero <= maximo){
                inclusivo = true;
            } else {
            inclusivo = false;
            }
        } else {
            if(numero > minimo && numero < maximo){
                inclusivo = true;
            } else {
                inclusivo = false;
            }
        } console.log(inclusivo);
    }


    inclusivoN(60, 50, 100);


