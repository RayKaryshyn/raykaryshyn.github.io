import { Switch, Route, Redirect } from 'react-router-dom';
import Projects from './Projects';
import Header from './Header';
import { HashLink } from 'react-router-hash-link';

function App() {
  return (
    <>
      <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4">
        <Header />

        <Switch>
          <Route exact path='/' basename={process.env.PUBLIC_URL}>
            <div id='home' style={{ paddingBottom: '100vh' }} className='pt-16 md:pt-20'>Home</div>
            <div id='about' style={{ paddingBottom: '100vh' }} className='pt-16 md:pt-20'>About</div>
            <div id='projects' style={{ paddingBottom: '100vh' }} className='pt-16 md:pt-20'>
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
            <div id='contact' style={{ paddingBottom: '100vh' }} className='pt-16 md:pt-20'>Contact</div>
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
