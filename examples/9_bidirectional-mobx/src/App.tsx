import { observer } from "mobx-react-lite";

import store from "./store";

const TimerDisplay: React.FunctionComponent = observer(() => (
  <div>
    <span>Stopwatch:</span>
    <span>{store.seconds.toFixed(1)}</span>
  </div>
));

const TimerToggle: React.FunctionComponent = observer(() => (
  <div>
    <button
      onClick={() => store.onToggle()}
      
    >
      {store.running ? "Stop" : "Start"}
    </button>
  </div>
));

const Names: React.FunctionComponent = observer(() =>
  store.names ? (
    <>
      <div>Data</div>
      <div>{JSON.stringify(store.names)}</div>
    </>
  ) : null
);

const App: React.FunctionComponent = () => (
  <div>
    <h1>
      Bidirectional - MobX
    </h1>
    <TimerDisplay />
    <TimerToggle />
    <Names />
  </div>
);

export default App;
