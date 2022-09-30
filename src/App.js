import "./components/appStyles.css";
import ClickCounterTwo from "./components/ClickCounterTwo";
import CounterTwo from "./components/CounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";


function App() {

  return (
    <div className="App">

      <CounterTwo
        render={(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />

      <CounterTwo
        render={(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      />


    </div>

  );
}

export default App;
