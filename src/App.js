import Greet from "./components/Greet"
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
function App() {

  return (
    <div className="App">
      <EventBinding />
      {/* <FunctionClick />
      <ClassClick /> */}
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
      </Welcome> */}
      {/* <Message />
      <Counter /> */}
    </div>

  );
}

export default App;
