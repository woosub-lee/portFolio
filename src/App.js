import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home'
import Project1 from './components/Project1';
import Navigation from './components/Navigation';

function App() {
    return (
        <HashRouter>
            <Navigation /> 
            <Route path="/" exact={true} component={Home}/>
            <Route path="/OMM" component={Project1}/>
        </HashRouter>
    );
}

export default App;
