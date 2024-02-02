const express = require('express');
const cors = require('cors'); // Importe o módulo cors
const app = express();
const port = 3000;

// Use o middleware cors
app.use(cors());

const simulateFootballGame = () => {
  // Probabilidade de ocorrer um gol em geral
  const goalProbability = 0.4;
  // Probabilidade de ocorrer um gol em um determinado momento do jogo
  const momentProbability = 0.1;
  // Gera um número aleatório entre 0 e 1
  const randomNumber = Math.random();
  // Simula o placar com base nas probabilidades
  let orangeTeamScore = 0;
  let blueTeamScore = 0;
  for (let minute = 1; minute <= 90; minute++) {
    // Determina se haverá um gol neste minuto
    if (Math.random() < momentProbability * goalProbability) {
      // Decide qual time marcará o gol
      const scoringTeam = Math.random() < 0.5 ? 'orangeTeam' : 'blueTeam';
      if (scoringTeam === 'orangeTeam') {
        orangeTeamScore += 1;
      } else {
        blueTeamScore += 1;
      }
    }
  }
  console.log(`${orangeTeamScore} x ${blueTeamScore}`);
  return { orangeTeam: orangeTeamScore, blueTeam: blueTeamScore };
};

// Rota para simular o jogo de futebol
app.get('/simulate', (req, res) => {
  const result = simulateFootballGame();
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
