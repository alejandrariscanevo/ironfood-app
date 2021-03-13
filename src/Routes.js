import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { GlobalStyle } from './globalStyles';
import Footer from './components/Footer';
import SearchPage from './pages/searchPage'
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import Home from './pages/Home';
import EntryRecipes from './pages/EntryRecipes';
import ViewRecipes from './pages/ViewRecipes';




function Routes() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <Route path="/find-meal-plan" component={SearchPage} exact />
        <Route path="/entry-recipes" component={EntryRecipes} exact />
        <Route path="/view-recipes" component={ViewRecipes} exact></Route>
      </Switch>
    
    <Footer />

    
     
    
    </Router>
    
  );
}


export default Routes;
