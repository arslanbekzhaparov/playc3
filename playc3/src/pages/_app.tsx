import logo from './logo.svg';
import { Player } from '@livepeer/react';
import blenderPoster from './components/DSC_4813.jpg';
import {
  LivepeerConfig,
  createReactClient,
  studioProvider,
} from '@livepeer/react';
 
const client = createReactClient({
  provider: studioProvider({ apiKey: '594fa6a7-bf96-459f-8adb-92232cc4c5eb' }),
});

const PosterImage = () => {
  return (
    null
  );
};

function PlayerComponent() {
  return (
    <Player
      title="Agent 327: Operation Barbershop"
      playbackId="6d7el73r1y12chxr"
      poster={<PosterImage />}
      showPipButton
      objectFit="cover"
      priority
    />
  );
};

function App() {
  return (
    <LivepeerConfig client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <PlayerComponent />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </LivepeerConfig>
  );
}

export default App;
