import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Modalss from "./components/Modalss";

function App() {

  let location = useLocation();
  let background = location.state && location.state.background;

  console.log('someone touches the location', location, background)
  return (
    <div id='main'>
      <Switch location={background || location}>
        <Route exact path='/' children={<Home />} />
      </Switch>

      {background && <Route path="/posts/:id" children={<Modalss />} />}
    </div>
  );
}

export default App;
