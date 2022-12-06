import "./App.css";
import Welcome from "./components/Welcome";

function App(props) {
  const today = new Date(Date.now()).toLocaleDateString();
  return (
    <div className="main">
      <Welcome userName="Jane" today={today}></Welcome>
      <Welcome userName="David" today={today}></Welcome>
      <Welcome userName="World" today={today}></Welcome>
    </div>
  );
}

export default App;
