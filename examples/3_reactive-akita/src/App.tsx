import { useSeconds, useNames, useRunning } from "./stopwatch.query";
import { stopwatchService } from "./stopwatch.service";

const TimerDisplay: React.FunctionComponent = () => {
  const seconds = useSeconds();
  return (
    <div>
      <span>Stopwatch:</span>
      <span>{(seconds ?? 0).toFixed(1)}</span>
    </div>
  );
};

const TimerToggle: React.FunctionComponent = () => {
  const running = useRunning();
  return (
    <div>
      <button
        onClick={() => stopwatchService.update({ running: !running })}
        
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
  <div>
    <h1>
      Reactive - Akita
    </h1>
    <TimerDisplay />
    <TimerToggle />
    <Names />
  </div>
);

export default App;
