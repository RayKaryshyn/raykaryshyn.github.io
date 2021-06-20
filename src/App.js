import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Projects from './Projects';
import Header from './Header';

function App() {
  return (
    <>
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4">
        <Header />

        <Switch>
          <Route exact path='/' basename={process.env.PUBLIC_URL}>
            <div id='home' style={{ paddingBottom: '100vh', paddingTop: '5em', marginTop: '-5em' }}>Home</div>
            <div id='about' style={{ paddingBottom: '100vh', paddingTop: '5em', marginTop: '-5em' }}>About</div>
            <div id='projects' style={{ paddingBottom: '100vh', paddingTop: '5em', marginTop: '-5em' }}>
              Projects
              <ul>
                <li>
                  <Link to='/projects/testing1'>
                    Testing1
                  </Link>
                </li>
                <li>
                  <Link to='/projects/testing2'>
                    Testing2
                  </Link>
                </li>
              </ul>
            </div>
            <div id='contact' style={{ paddingBottom: '100vh', paddingTop: '5em', marginTop: '-5em' }}>Contact</div>
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
        </Switch>
      </div>
    </>
  );
}

export default App;
