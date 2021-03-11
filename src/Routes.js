import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import SearchPage from './pages/searchPage'
import SigninPage from './pages/signin';
import Home from './pages/Home';
import ProductsView from './pages/ProductsView';




function Routes() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/find-meal-plan" component={SearchPage} exact />
        <Route path="/our-meals" component={ProductsView} exact />
      </Switch>
    
    <Footer />

    
     
    
    </Router>
    
  );
}


export default Routes;
