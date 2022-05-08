// Components
import NavHeader from "./components/nav-header/nav-header"
import ArtistSpotlightGrid from "./components/artist-spotlight/artist-spotlight-grid";

// CSS
import './App.css';

function App() {
  return (
    <div className="App theme-light">
      <NavHeader/>
      <div className="landing">
        <div className="grid-span-2">
          <h1>Sparrow</h1>
          <a className="button">Concert Schedule</a>
        </div>
        <a className="button">Spotify</a>
        <a className="button">Apple Music</a>
      </div>
      <ArtistSpotlightGrid/>
    </div>
  );
}

export default App;
