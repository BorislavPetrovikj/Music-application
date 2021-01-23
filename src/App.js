import "./App.css";
import BrowseArtists from "./Components/BrowseArtists";
import Header from "./Components/Header";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ArtistsPage from "./Components/ArtistsPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={BrowseArtists} />
          <Route path="/Details/:id" component={ArtistsPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
