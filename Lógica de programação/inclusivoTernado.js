function inclusivoT(numero, minimo, maximo, inclusivo){
        return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
    }


    inclusivoT(60, 50, 100);
