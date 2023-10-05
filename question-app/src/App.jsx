import { useState } from "react";
import Data from "./Data.json";
import "./App.css";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < Data.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="App">
      <div className="card">
        <div className="card-title">
          <h2>Berat Berkay'ı Ne Kadar Tanıyorsun?</h2>
          <p>
            Bu test beni ne kadar tanıdığını ölçmek için yapılmıştır. Test
            sonunda almış olduğun puanı lütfen bana geri bildirimde bulun.
          </p>
        </div>

        {showResult ? (
          <div className="card-result">
            <h1>SONUÇ</h1>
            <h1>Puan : {score} </h1>
          </div>
        ) : (
          <div className="card-question">
            <h2>
              Soru {currentQuestion + 1} / {Data.length}
            </h2>
            <h2>{Data[currentQuestion].text}</h2>
            {Data[currentQuestion].options.map((option) => {
              return (
                <li
                  onClick={() => optionClicked(option.isCorrect)}
                  key={option.id}
                >
                  {option.text}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
