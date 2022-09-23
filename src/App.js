import Greet from "./components/Greet"

function App() {

  return (
    <div className="App">
      <Greet name ="Alice" age ="10"/>
      <Greet name ="Diana" age ="20" />
      <Greet name ="Draco" age ="30"/>
    </div>

  );
}

export default App;
