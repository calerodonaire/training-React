import "./App.css";
import { useState } from "react";
// import Person from "./components/Person";
import Counter from "./components/Counter";
function App() {
  const [count, setCount] = useState(0);
  const handlePlusOne = () => {
    setCount(count + 1);
  };
  const handleTimesFive = () => {
    setCount(count * 5);
  };
  const handleMinusOne = () => {
    setCount(count - 1);
  };
  const handleDivideByHundred = () => {
    if (count !== 0) {
      setCount(count / 100);
    } else {
      console.log("División de 0 no es posible");
    }
  };

  return (
    <div>
      <Counter count={count} />
      <button onClick={handlePlusOne}>Pulsame para sumar</button>
      <button onClick={handleTimesFive}>Pulsame para multiplicar</button>
      <button onClick={handleMinusOne}>Pulsame para restar</button>
      <button onClick={handleDivideByHundred}>
        Pulsame para dividir por 100
      </button>
    </div>
  );
}

export default App;
