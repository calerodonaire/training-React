// import './App.css';
import { useState } from "react";
import Person from "./components/Person";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <Person></Person>
      {/* <p>Has clicado {count} veces.</p>
      <button onClick={() => setCount(count + 1)}>Pulsame</button> */}
    </div>
  );
}

export default App;
