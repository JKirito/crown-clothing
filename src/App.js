import React from 'react'
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Homepage from './page/homepage/homepage.component'

function App() {
  return (
    <div>
      <Switch>
        <Route path='' exact component={Homepage} />
      </Switch>
    </div >
  );
}

export default App;
