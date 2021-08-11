import React from "react";
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
        <Route exact path={["/", "/About"]} component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} /> 
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
