function solucao(lista) {
    //seu codigo aqui
  
  let soma = 0;
  
  for (i = 0; i < lista.length; i++) {
      soma += lista[i];
      
  };
  
  const valorEmMedia = (soma / lista.length);
  
  console.log(valorEmMedia);
  
  
}

function processData(input) {
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