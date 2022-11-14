import { store, useNames, useRunning, useSeconds, useToggle } from "./store";
import { Provider } from "react-redux";

const TimerDisplay: React.FunctionComponent = () => {
  const seconds = useSeconds();
  return (
    <div>
      <span>Stopwatch:</span>
      <span>{seconds.toFixed(1)}</span>
    </div>
  );
};

const TimerToggle: React.FunctionComponent = () => {
  const running = useRunning();
  const toggle = useToggle();
  return (
    <div>
      <button
        onClick={toggle}
        
      >
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
};

const Names: React.FunctionComponent = () => {
  const names = useNames();
  return names ? (
    <>
      <div>Data</div>
      <div>{JSON.stringify(names)}</div>
    </>
  ) : null;
};

const App: React.FunctionComponent = () => (
  <Provider store={store}>
    <div>
      <h1>
        Unidirectional - Rematch
      </h1>
      <TimerDisplay />
      <TimerToggle />
      <Names />
    </div>
  </Provider>
);

export default App;
