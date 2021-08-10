// Helpers o Utils
function esPar(numerito) {
    return (numerito % 2 === 0);
}

function calcularMediaAritmetica(lista){
    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );
    const promedioLista1 = sumaLista / lista.length;
    return promedioLista1
}

// Calculadora de medianas
function medianaSalarios(lista){
    const mitad = parseInt(lista.length / 2);

    if (esPar(lista.length)) {
        const personitaMitad1 = lista[mitad - 1];
        const personitaMitad2 = lista[mitad];
        const mediana = calcularMediaAritmetica([personitaMitad1, personitaMitad2]);
        return mediana;
    } else {
        const personitaMitad = lista[mitad];
        return personitaMitad;
    }
}

// Mediana General
const salariosVe = venezuela.map(
    function(persona) {
        return persona.salary;
    }
);

const salariosVeSorted = salariosVe.sort(
    function (salaryA, salaryB) {
        return salaryA - salaryB;
    }
);

const medianaGeneralVe = medianaSalarios(salariosVeSorted);

// Mediana del top 10%

const spliceStart = (salariosVeSorted.length * 90) / 100;
const spliceCount = salariosVeSorted.length - spliceStart;

const salariosVeTop10 = salariosVeSorted.splice(
    spliceStart,
    spliceCount,
)

const medianaTop10Ve = medianaSalarios(salariosVeTop10);



console.log(
    medianaGeneralVe,
    medianaTop10Ve,
);