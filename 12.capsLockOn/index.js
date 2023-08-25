function processData(input) {
    //Enter your code here

    const primeiraLetra = input[0];
    const restoPalavra = input.slice(1);

    if (input === input.toUpperCase()) {
        console.log(input.toLowerCase());
    } else if (primeiraLetra === primeiraLetra.toLowerCase() && restoPalavra === restoPalavra.toUpperCase()) {
        console.log(primeiraLetra.toUpperCase() + restoPalavra.toLowerCase())
    } else {
        console.log(input)
    };
}; 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});