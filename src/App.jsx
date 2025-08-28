import { useState } from "react";
import "./App.css";

function App() {
  const choices = ["rock", "paper", "scissors"];
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");

  const playGame = (choice) => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    setUserChoice(choice);
    setComputerChoice(randomChoice);
    setResult(getWinner(choice, randomChoice));
  };

  const getWinner = (user, computer) => {
    if (user === computer) return "It's a Draw! 😐";
    if (
      (user === "rock" && computer === "scissors") ||
      (user === "paper" && computer === "rock") ||
      (user === "scissors" && computer === "paper")
    ) {
      return "You Win! 🎉";
    }
    return "Computer Wins! 🤖";
  };

  return (
    <div className="game-container">
      <h1>✊✋✌️ Rock Paper Scissors</h1>
      <div className="buttons">
        {choices.map((choice) => (
          <button key={choice} onClick={() => playGame(choice)}>
            {choice.charAt(0).toUpperCase() + choice.slice(1)}
          </button>
        ))}
      </div>

      <div className="results">
        <p><strong>Your Choice:</strong> {userChoice || "None"}</p>
        <p><strong>Computer's Choice:</strong> {computerChoice || "None"}</p>
        <h2>{result}</h2>
      </div>
    </div>
  );
}

export default App;
