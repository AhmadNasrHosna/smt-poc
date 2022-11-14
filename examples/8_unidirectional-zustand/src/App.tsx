import { useApplicationState } from "./store";

const TimerDisplay: React.FunctionComponent = () => {
  const { seconds } = useApplicationState();
  return (
    <div>
      <span>Stopwatch:</span>
      <span>{seconds.toFixed(1)}</span>
    </div>
  );
};

const TimerToggle: React.FunctionComponent = () => {
  const { running, onToggle } = useApplicationState();
  return (
    <div>
      <button
        onClick={onToggle}
        
      >
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
};

const Names: React.FunctionComponent = () => {
  const { names } = useApplicationState();
  return names ? (
    <>
      <div>Data</div>
      <div>{JSON.stringify(names)}</div>
    </>
  ) : null;
};

const App: React.FunctionComponent = () => (
  <div>
    <h1>
      Unidirectional - Zustand
    </h1>
    <TimerDisplay />
    <TimerToggle />
    <Names />
  </div>
);

export default App;
