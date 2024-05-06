
function verificarTime() {
    
  var continuarPerguntando = true;

  while (continuarPerguntando) {

    var respostaTime = prompt("Qual a cor que traduzido do inglês é rosa?");

    
    if (respostaTime.toLowerCase() === "Pink") {
      alert("Very Good:)");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Very bad:(");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();