import Greet from "./components/Greet"

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
    </div>

  );
}

export default App;
