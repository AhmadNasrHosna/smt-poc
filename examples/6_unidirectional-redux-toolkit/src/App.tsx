import {
  store,
  toggle,
  selectSeconds,
  selectRunning,
  selectNames,
} from "./store";
import { Provider, useDispatch, useSelector } from "react-redux";

const TimerDisplay: React.FunctionComponent = () => {
  const seconds = useSelector(selectSeconds);

  return (
    <div>
      <span>Stopwatch:</span>
      <span>{seconds.toFixed(1)}</span>
    </div>
  );
};

const TimerToggle: React.FunctionComponent = () => {
  const running = useSelector(selectRunning);
  const dispatch = useDispatch();

  return (
    <div>
      <button
        onClick={() => dispatch(toggle())}
        
      >
        {running ? "Stop" : "Start"}
      </button>
    </div>
  );
};

const Names: React.FunctionComponent = () => {
  const names = useSelector(selectNames);

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
        Unidirectional - Redux Toolkit
      </h1>
      <TimerDisplay />
      <TimerToggle />
      <Names />
    </div>
  </Provider>
);

export default App;
