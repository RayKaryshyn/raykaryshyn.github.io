import { Switch, Route, Redirect } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import Projects from './Projects';
import Header from './Header';
import PageNotFound from './PageNotFound';

function App() {
  return (
    <>
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4">
        <Header />

        <Switch>
          <Route exact path='/'>
            <div id='home' style={{ paddingBottom: '100vh', paddingTop: '5em', marginTop: '-5em' }}>Home</div>
            <div id='about' style={{ paddingBottom: '100vh', paddingTop: '5em', marginTop: '-5em' }}>About</div>
            <div id='projects' style={{ paddingBottom: '100vh', paddingTop: '5em', marginTop: '-5em' }}>
              Projects
              <ul>
                <li>
                  <HashLink to='/projects/testing1'>
                    Testing1
                  </HashLink>
                </li>
                <li>
                  <HashLink to='/projects/testing2'>
                    Testing2
                  </HashLink>
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

          <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
        </Switch>
      </div>
    </>
  );
}

export default App;
