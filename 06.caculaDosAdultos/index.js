function solucao(lista) {
    // seu codigo aqui

    const adultos = lista.filter((idade) => {
        return idade >= 18;
    });
    
    if (adultos.length >= 1) {
        const idadeMinima = adultos.reduce((idadeMinima, idadeDaPessoa) => {
            return idadeMinima < idadeDaPessoa ? idadeMinima : idadeMinima = idadeDaPessoa
        });
        console.log(idadeMinima);
    } else {
        console.log('CRESCA E APARECA')    
    };        
};

function processData(input) {
    //Enter your code here
    const strings = input.split(" ");
    const numeros = [];
    for(let i = 0; i < strings.length; i++) {
        numeros.push(parseInt(strings[i] ,10));
    }
    solucao(numeros);
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
