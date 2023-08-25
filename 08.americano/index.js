function solucao(numeros) {
    // seu codigo aqui
   
   let posicao = 0;
   
   const somaDosNumeros = numeros.reduce((acumulador, itemAtual) => {
       return acumulador + itemAtual
   });
   
  
   for (x = 0; x < somaDosNumeros; x++) {
       if (posicao < numeros.length){
           posicao++
       } else {
           posicao = 1
       }
   }
   
  console.log(posicao);
   
   
}

function processData(input) {
   const strings = input.split(" ");
   const numeros = [];
   for(let i = 0; i < strings.length; i++) {
         numeros.push(parseInt(strings[i] ,10))
     }
   solucao(numeros)
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
