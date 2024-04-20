import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 0) setStep(step - 1);
  }

  const handleNext = function () {
    if (step < 2) {
      setStep((s) => s + 1);
      setStep((s) => s + 1);
    }
  };

  return (
    <>
      <button onClick={() => setIsOpen((open) => !open)} className="close">
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 0 ? "active" : ""}>1</div>
            <div className={step >= 1 ? "active" : ""}>2</div>
            <div className={step >= 2 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step:{step + 1} {messages[step]}
          </p>
          <div className="buttons">
            <Button
              backgroundColor="#7950f2"
              color="#fff"
              handleEvent={handlePrevious}
            >
              <span>👈Previous </span>
            </Button>
            <Button
              backgroundColor="#7950f2"
              color="#fff"
              handleEvent={handleNext}
            >
              <span>Next 👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ backgroundColor, color, handleEvent, ...prop }) {
  return (
    <button onClick={handleEvent} style={{ backgroundColor, color }}>
      {prop.children}
    </button>
  );
}

export default App;
