function verificarTime() {

  var continuarPerguntando = true;

  while (continuarPerguntando) {

    var respostaTime = prompt("A palavra pink em inglês é qual cor em português?");

    
    if (respostaTime.toLowerCase() === "rosa") {
      alert("Você é competente!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Você é imcopetente!");
    }
  }
}