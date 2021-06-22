import { Switch, Route, Redirect } from 'react-router-dom';
import Projects from './Projects';
import Header from './Header';
import { HashLink } from 'react-router-hash-link';
import handleViewport from 'react-in-viewport';

/* const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  const color = inViewport ? '#217ac0' : '#ff9800';
  const text = inViewport ? 'In viewport' : 'Not in viewport';

  console.log(text);

  return (
    <div className="viewport-block" ref={forwardedRef}>
      <h3>{text}</h3>
      <div style={{ width: '400px', height: '300px', background: color, transition: 'background 1s ease-in-out' }} />
    </div>
  );
};
const ViewportBlock = handleViewport(Block); */

const Block = (props) => {
  const { inViewport, forwardedRef } = props;
  const text = inViewport ? 'In viewport' : 'Not in viewport';

  console.log(text);

  return (
    <div className="max-w-screen-lg xl:max-w-screen-xl mx-auto px-4">
      <Header inViewport={inViewport} />

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
          <div id='contact' style={{ paddingBottom: '100vh' }} className='pt-16 md:pt-20' ref={forwardedRef}>
            Contact
            {/* <ViewportBlock /> */}
          </div>
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
  );
};
const ViewportBlock = handleViewport(Block);

function App() {
  return (
    <>
      <ViewportBlock />
    </>
  );
}

export default App;
