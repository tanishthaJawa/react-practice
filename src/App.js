import Greet from "./components/Greet"
import Welcome from "./components/Welcome";

function App() {

  return (
    <div className="App">
      <Greet name="Alice" age="10">
        <p> This is child props</p>
      </Greet>
      <Greet name="Diana" age="20" >
        <button>Action</button>
      </Greet>
      <Greet name="Draco" age="30" />
      <Welcome name="Alice" age="10">
        <p> This is child props</p>
      </Welcome>
      <Welcome name="Diana" age="20" >
        <button>Action</button>
      </Welcome>
      <Welcome name="Draco" age="30" />
    </div>

  );
}

export default App;
