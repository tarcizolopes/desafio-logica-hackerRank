function solucao(jogadores) {
    //seu codigo aqui
    
      const jogadaComResultadoUm = jogadores.filter((jogada) => {
          return jogada.jogada === 1;
      });
      
      const jogadaComResultadoZero = jogadores.filter((jogada) => {
          return jogada.jogada === 0;
      });
      
      if (jogadaComResultadoUm.length === 1) {
          console.log(jogadaComResultadoUm[0].nome);
      } else if (jogadaComResultadoZero.length === 1) {
          console.log(jogadaComResultadoZero[0].nome);
      } else {
          console.log('NINGUEM')
      };
      
  }
  
  function processData(input) {
      solucao(JSON.parse(input));
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
  