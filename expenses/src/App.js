import "./App.css";
import Expenses from "./components/Expenses";
import InputExpenses from "./components/InputExpenses";

function App() {
  return (
    <div className="main">
      <h1>Transactions</h1>
      <InputExpenses />
      <Expenses></Expenses>
    </div>
  );
}

export default App;
