// Components
import NavHeader from "./components/nav-header/nav-header"
import ArtistSpotlightGrid from "./components/artist-spotlight/artist-spotlight-grid";
import DynamicCarousel from "./components/carousel/carousel";
import LandingArt from './components/carousel/landing-art.json';

// CSS
import './App.css';

function App() {
  return (
    <div className="App theme-light">
      <NavHeader/>
      <div className="landing">
        <div className="grid-span-2">
          <h1>Sparrow's Valley</h1>
          <p>Alt rock</p>
          <a className="button">Concert Schedule</a>
        </div>
      </div>
      <div className="grid-span-2">
        <DynamicCarousel src={LandingArt}/>
      </div>
      {/* <ArtistSpotlightGrid/> */}
    </div>
  );
}

export default App;
