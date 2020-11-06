import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

import Skills from './components/Skills';
import Home from './components/Home';
import UxUi from './components/UxUi';




import './App.scss';
import ScrollToTop from './components/ScrollToTop';

function App() {

  return (
     <Router>
      <ScrollToTop />
        <nav>
          <div className="perfil-inicio">
            <i className="far fa-gem"></i>
          </div>
          

          <ul >
          <NavLink exact activeClassName="link-focus" to="/" className="link">Home</NavLink>
          <NavLink exact activeClassName="link-focus" to="/skills" className="link">Skills</NavLink>
          <NavLink exact activeClassName="link-focus" to="/uxui" className="link">Ux/Ui</NavLink>
          </ul>

        

        </nav>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/skills"><Skills /></Route>
          <Route exact path="/uxui"><UxUi /></Route>
        </Switch>
    </Router>  
  );
}

export default App;
