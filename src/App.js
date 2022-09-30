import Greet from "./components/Greet"
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBinding from "./components/EventBinding";
import ParentComponent from "./components/ParentComponent";
import GreetUser from "./components/GreetUser";
import NamesList from "./components/NamesList";
import Stylesheet from "./components/Stylesheet";
import styles from './components/appStyles.module.css'
import "./components/appStyles.css"
import Form from "./components/Form";
import LifeCycleA from "./components/LifeCycleA";
import FragmentDemo from "./components/FragmentDemo";
import Table from "./components/Table";
import PureComp from "./components/PureComp";
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusInput from "./components/FocusInput";
import ForwadRefsParent from "./components/ForwadRefsParent";
import PortalDemo from "./components/PortalDemo";
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";
import ClickCounter from "./components/ClickCounter";
import HoverCounter from "./components/HoverCounter";
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import User from "./components/User";
import CounterTwo from "./components/CounterTwo";


function App() {

  return (
    <div className="App">
      {/* <ClickCounter name ="Bela"/>
      <HoverCounter /> */}

      {/* <ClickCounterTwo />
      <HoverCounterTwo />
      <User render={(isLoggedIn) => isLoggedIn ? "ballu" : "Guest"} /> */}

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

      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}



      {/* <PortalDemo /> */}
      {/* <ForwadRefsParent /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <FragmentDemo />
      <Table />
      <LifeCycleA />
      <Form />
      <Stylesheet primary={true} />
      <h1 className="error">Error</h1>
      <h1 className={styles.success}>Success</h1>
      <GreetUser />
      <NamesList />
      <EventBinding />
      <FunctionClick />
      <ClassClick />
      <Greet name="Alice" age="10">
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
      <Message />
      <Counter />
      <ParentComponent /> */}
    </div>

  );
}

export default App;
