import React from 'react';
import { Switch, Route, Redirect } from 'react-router';

import Dashboard from '../dashboard/dashboard';

export default props => (
    <Switch>
        <Route exact path='/' component={Dashboard} />
    </Switch>
);