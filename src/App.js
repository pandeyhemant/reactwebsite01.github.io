import React from "react";
import { Navbar, Footer, Pricing } from "./components";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyles from './globalStyles';
import Services from './pages/Services/Services';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import Home from './pages/HomePage/Home';
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router className="App">
     <GlobalStyles/>
     <ScrollToTop/>
     <Navbar/>
     <Switch>
       <Route exact path="/" component={Home}/>
       <Route exact path="/services" component={Services}/>
       <Route exact path="/products" component={Products}/>
       <Route exact path="/sign-up" component={SignUp}/>
     </Switch>
     <Footer />
    </Router>
  );
}

export default App;
