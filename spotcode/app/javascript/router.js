import React from 'react';
import HomeScreen from './screens/home';
import { Switch, Router, Route } from 'react-router-dom';

const Routes = () => {
    <Switch>
        <Route exact path='/' component={HomeScreen}/>
    </Switch>
}

export default Routes;