import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './page/homepage/homepage.component'
import ShopPage from './page/shop/shop.component';
import Header from './components/header/header.component'
import SignInSignUpPage from './page/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInSignUpPage} />
      </Switch>
    </div >
  );
}

export default App;
