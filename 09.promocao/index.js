function solucao(precos) {
    //seu codigo aqui
      
    let tamanhoDoArray = precos.length
        
    let precoFinal = precos.reduce((acumulador, itemAtual) => {
        return acumulador + itemAtual
    });
    
    if (tamanhoDoArray < 3) {
        console.log(precoFinal)
    } else {
        const menorValor = Math.min(...precos);
        precoFinal -= menorValor * 0.5
        console.log(precoFinal);
    };
};
                  
function processData(input) {
const lista = input.split(" ");
lista.forEach((x, i, a) => a[i] = parseInt(x, 10));
solucao(lista);
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
