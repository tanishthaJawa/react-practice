import Greet from "./components/Greet"
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./Counter";
function App() {

  return (
    <div className="App">
      {/* <Greet name="Alice" age="10">
        <p> This is child props</p>
      </Greet>
      <Greet name="Diana" age="20" >
        <button>Action</button>
      </Greet>
      <Welcome name="Alice" age="10">
        <p> This is child props</p>
      </Welcome>
      <Welcome name="Diana" age="20" >
        <button>Action</button>
      </Welcome>
      <Message /> */}
      <Counter />
    </div>

  );
}

export default App;
