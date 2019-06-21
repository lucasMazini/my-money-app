import React from 'react';
import { HashRouter } from 'react-router-dom';

import Header from '../../common/template/header';
import Sidebar from '../../common/template/sidebar';
import Footer from '../../common/template/footer';
import Messages from '../../common/msg/messages';

import Routes from './routes';

export default props => (
    <HashRouter>
        <Header />
        <Sidebar />
        <div className='page-content-wrapper'>
            <Routes />
        </div>
        <Footer />
        <Messages />
    </HashRouter>
);