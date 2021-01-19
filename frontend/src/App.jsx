import React from 'react';
import {  
  BrowserRouter as Router, 
  Route, 
  Link
} from 'react-router-dom';
import About from './pages/About';
import Fib from './pages/Fib';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <header className="fib-header">
          <h1>Fib Calculator v2</h1>
          <Link className="nav-link" to="/">Home</Link>
          <Link className="nav-link" to="/otherpage">About</Link>
        </header>
        <div className="container fib-card">
          <Route exact path="/" component={Fib} />
          <Route path="/otherpage" component={About} />
        </div>
      </div>
    </Router>
  );
}

export default App;
