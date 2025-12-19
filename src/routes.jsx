import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Cars from './pages/Cars';
import Services from './pages/Services';
import Cart from './pages/Cart';
import Contact from './pages/Contact';
import About from './pages/About';

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/cars" component={Cars} />
            <Route path="/services" component={Services} />
            <Route path="/cart" component={Cart} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
        </Switch>
    );
};

export default Routes;