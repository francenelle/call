import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import Callvideo from './pages/Callvideo';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Messages from './pages/Messages';
import NotFound from './pages/NotFound';
import Notifications from './pages/Notifications';


const App = () => {
  return (
    <div>
      <BrowserRouter>

        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/callvideo' exact component={Callvideo}/>
          <Route path='/notification' exact component={Notifications}/>
          <Route path='/message' exact component={Messages}/>
          <Route path='/contact' exact component={Contact}/>
          <Route component={NotFound} />
        </Switch>
      
      
      </BrowserRouter>
    </div>
  );
};

export default App;