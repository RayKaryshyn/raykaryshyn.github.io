import { Switch, Route } from 'react-router-dom';
import { NavHashLink } from "react-router-hash-link";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <NavHashLink to="/#home" id="test" smooth style={{ display: 'block', marginBottom: '1000vh' }}>Go</NavHashLink>
          <div id="home">Home</div>
          <NavHashLink to="/#about" smooth style={{ display: 'block', marginBottom: '1000vh' }}>Go</NavHashLink>
          <div id="about">About</div>
          <NavHashLink to="/#test" smooth style={{ display: 'block', marginBottom: '1000vh' }}>Go</NavHashLink>
        </Route>
      </Switch>
    </>
  );
}

export default App;
