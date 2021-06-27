import { Switch, Route, Redirect } from 'react-router-dom';
import Projects from './Projects';
import Header from './Header';
import OnePage from './onepage';

function App() {
  return (
    <>
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4">
        <Header />

        <Switch>
          <Route exact path='/' basename={process.env.PUBLIC_URL}>
            <OnePage />
          </Route>

          <Route exact path='/home'>
            <Redirect to='/#home' />
          </Route>

          <Route exact path='/about'>
            <Redirect to='/#about' />
          </Route>

          <Route exact path='/projects'>
            <Redirect to='/#projects' />
          </Route>
          <Route exact path='/projects/:project'>
            <Projects />
          </Route>

          <Route exact path='/contact'>
            <Redirect to='/#contact' />
          </Route>

          <Route>
            404
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
