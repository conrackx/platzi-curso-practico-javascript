function calcularMediaAritmetica(lista){
        const sumaLista = lista.reduce(
            function(valorAcumulado = 0, nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );
        const promedioLista1 = sumaLista / lista.length;
        return promedioLista1
    }

const lista1 = [100, 200, 500, 4000000000];

const mitadLista1 = parseInt(lista1.length / 2);

function esPar(numerito){
    if (numerito % 2 === 0){
        return true;
    } else {
        return false;
    }
}

let mediana;

if (esPar(lista1.length)){
    const elemento1 = lista1[mitadLista1 - 1];
    const elemento2 = lista1[mitadLista1];
    const promedioElemento1y2 = calcularMediaAritmetica([
        elemento1, elemento2]);
    mediana = promedioElemento1y2;
} else {
    mediana = lista1[mitadLista1];
}

// reto transformar en funcion para que funcione con cualquier lista de array ademas de lista 1
// buscar una solucion para ordenar los valores (la mediana debe ser una lista de valores ordenados, no aleatorios) puede ser un ciclo for, y usarse el metodo .sort()