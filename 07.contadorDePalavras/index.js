function solucao(texto) {
    // Seu codigo aqui
    
    const formatandoTexto = texto.split(' ');
    
    const filtrandoItens = formatandoTexto.filter((itens) => {
        return itens.trim() 
    });
    
    const contador = filtrandoItens.length;
    
    console.log(contador);
};

function processData(input) {
	solucao(input)
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