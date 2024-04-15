
function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Quem vai ser campeão da B 2024?");

    
    if (respostaTime.toLowerCase() === "SANTOS") {
      alert("Isso mesmo! O Santão vai subir!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada da função para iniciar o processo
verificarTime();

  
