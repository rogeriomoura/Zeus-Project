import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Modal from 'react-modal';
import PageNotFound from './views/PageNotFound';
import HomePage from './views/Home';
import AppNav from './components/AppNav';
import './styles/App.css';

Modal.setAppElement('body');

function App() {
  return (
    <Router>
      <div id="App" className="App">
        <AppNav />
        <div id="page-body">
          <Switch>
            <Route path="/" component={ HomePage } exact/>
            {/* <Route path="/item/:username/:name" component={ username, name }/> */}
            <Route component={ PageNotFound }/>
          </Switch>
        </div>
      </div>
      <div className="footer">
        <footer>
          <div class="a"><a href="/">Contact Us</a><br></br></div>
          <div class="a"><a href="/">Careers</a><br></br></div>
          <div class="a"><a href="/">Privacy Policy</a><br></br></div>
          &copy; 2020 Hackathon_Gang
        </footer>
      </div>
    </Router>
  );
}

export default App;
