import { useStopWatch, useNames, useRunning, useSeconds } from "./store";

const TimerDisplay: React.FunctionComponent = () => {
  const [seconds] = useSeconds();
  return (
    <div>
      <span>Stopwatch:</span>
      <span>{seconds.toFixed(1)}</span>
    </div>
  );
};

const TimerToggle: React.FunctionComponent = () => {
  const [running, setRunning] = useRunning();
  return (
      <button
        onClick={() => setRunning(!running)}
      >
        {running ? "Stop" : "Start"}
      </button>
  );
};

const Names: React.FunctionComponent = () => {
  const [names] = useNames();
  return names ? (
    <>
      <div>Data</div>
      <div>{JSON.stringify(names)}</div>
    </>
  ) : null;
};

const App: React.FunctionComponent = () => {
  useStopWatch();
  return (
    <div>
      <h1>
        Hooks - Global State
      </h1>
      <TimerDisplay />
      <TimerToggle />
      <Names />
    </div>
  );
};

export default App;
