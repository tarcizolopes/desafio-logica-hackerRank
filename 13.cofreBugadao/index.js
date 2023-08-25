function processData(input) {
    //Enter your code here
    const [senha, senhaDigitada] = input.trim().split('\n')
    let conferindoCaracteres = 0;
    let senhaCorretaVerificada = '';

    for (let caractere of senhaDigitada) {
        if (senha[conferindoCaracteres] === caractere) {
            conferindoCaracteres++;
                senhaCorretaVerificada += caractere;
            };
    };

        
    console.log(senhaCorretaVerificada === senha ? "SIM" : "NAO")
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
