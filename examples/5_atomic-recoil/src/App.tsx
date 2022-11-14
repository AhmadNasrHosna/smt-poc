import { useRecoilValue, useRecoilState, RecoilRoot } from "recoil";

import { namesAtom, runningAtom, secondsAtom, useStopwatch } from "./store";

const TimerDisplay: React.FunctionComponent = () => {
  const seconds = useRecoilValue(secondsAtom);
  return (
    <div>
      <span>Stopwatch:</span>
      <span>{seconds.toFixed(1)}</span>
    </div>
  );
};

const TimerToggle: React.FunctionComponent = () => {
  const [running, setRunning] = useRecoilState(runningAtom);
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
  const names = useRecoilValue(namesAtom);
  return names ? (
    <>
      <div>Data</div>
      <div>{JSON.stringify(names)}</div>
    </>
  ) : null;
};

const App: React.FunctionComponent = () => {
  useStopwatch();
  return (
    <div>
      <h1>
        Atomic - Recoil
      </h1>
      <TimerDisplay />
      <TimerToggle />
      <Names />
    </div>
  );
};

export default () => (
  <RecoilRoot>
    <App />
  </RecoilRoot>
);
