import { useAtom } from "jotai";

import { namesAtom, runningAtom, secondsAtom } from "./store";

const TimerDisplay: React.FunctionComponent = () => {
  const [seconds] = useAtom(secondsAtom);
  return (
    <div>
      <span>Stopwatch:</span>
      <span>{seconds.toFixed(1)}</span>
    </div>
  );
};

const TimerToggle: React.FunctionComponent = () => {
  const [running, setRunning] = useAtom(runningAtom);
  return (
    <div>
      <button
        onClick={() => setRunning(!running)}
      >
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
};

const Names: React.FunctionComponent = () => {
  const [names] = useAtom(namesAtom);
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
      Atomic - Jotai
    </h1>
    <TimerDisplay />
    <TimerToggle />
    <Names />
  </div>
);

export default App;
