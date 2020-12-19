import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router >
          <Navbar/>
          <Switch>
            <Route path="/portfolio" component={Portfolio} ></Route>
            <Route path="/" component={Homepage} ></Route>
            {/* Enter More Routes dawg */}
          </Switch>
          <Footer/>
      </Router>
    </div>
  );
}

export default App;
