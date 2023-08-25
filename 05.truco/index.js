function solucao(carta) {
    //seu codigo aqui
    
   const cartaParaCima = carta;
    
       
    if (cartaParaCima === 'Q') {
        console.log('J');
    } else if (cartaParaCima === 'J') {
        console.log('K');
    } else if (cartaParaCima === 'K') {
        console.log('A');
    } else if (cartaParaCima === 'A') {
        console.log('2');
    } else if (cartaParaCima === '2') {
        console.log('3');
    } else if (cartaParaCima === '3') {
        console.log('Q');
    };
    
}

function processData(input) {
    solucao(input);
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