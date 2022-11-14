import { useStopwatch, names, running, seconds } from "./store";
import { useState } from "@hookstate/core";

const TimerDisplay: React.FunctionComponent = () => {
  const secondsState = useState(seconds);
  return (
    <div>
      <span>Stopwatch:</span>
      <span>{secondsState.get().toFixed(1)}</span>
    </div>
  );
};

const TimerToggle: React.FunctionComponent = () => {
  useStopwatch();
  const runningState = useState(running);
  return (
    <div>
      <button
        onClick={() => runningState.set(!runningState.get())}
        
      >
        {runningState.get() ? "Stop" : "Start"}
      </button>
    </div>
  );
};

const Names: React.FunctionComponent = () => {
  const namesState = useState(names);
  return names ? (
    <>
      <div>Data</div>
      <div>
        {JSON.stringify(namesState.get())}
      </div>
    </>
  ) : null;
};

const App: React.FunctionComponent = () => (
  <div>
    <h1>
      Hooks - Hookstate
    </h1>
    <TimerDisplay />
    <TimerToggle />
    <Names />
  </div>
);

export default App;
