import { useState } from "react";
import Data from "./Data.json";
import "./App.css";

function App() {
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className="App">
      <div className="card">
        <div className="card-title">
          <h2>Berat Berkay'ı Ne Kadar Tanıyorsun?</h2>
          <p>
            Bu test beni ne kadar tanıdığını ölçmek için yapılmıştır. Test
            sonunda almış olduğun puanı lütfen bana geri bildirimde bulun.
          </p>
          <h2>Puan : {score} </h2>
        </div>

        {showResult ? (
          <div className="card-result">
            <h1>result</h1>
          </div>
        ) : (
          <div className="card-question">
            <h2>
              Soru {currentQuestion + 1} / {Data.length}
            </h2>
            <h3>{Data[currentQuestion].text}</h3>
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
