import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { Store } from './store';
import LoginOrApp from './pages/loginOrApp';

ReactDOM.render(
    <Provider store={Store}>
        <LoginOrApp />
    </Provider>
,document.getElementById('app'));