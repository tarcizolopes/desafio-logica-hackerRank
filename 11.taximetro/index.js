function solucao(min, km) {
    //seu codigo aqui
    
    const valorInicialPorMinuto = 50 * 20;
    const valorInicialPorKm = 70 * 10;
    
    let valorFinalKm;
    if (km <= 10) {
        valorFinalKm = km * 70;
    } else {
        const kmExcedente = (km - 10) * 50
        valorFinalKm = valorInicialPorKm + kmExcedente
    };
    
    let valorFinalMin;
    if (min <= 20) {
        valorFinalMin = min * 50;
    } else {
        const minExcedente = (min - 20) * 30
        valorFinalMin = valorInicialPorMinuto + minExcedente
    };
    
    const valorFinal = valorFinalKm + valorFinalMin
    console.log(Math.floor(valorFinal));
}

function processData(input) {
    const x = input.split(" ");
    const min = parseFloat(x[0], 10);
    const km = parseFloat(x[1], 10);
    solucao(min, km);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});