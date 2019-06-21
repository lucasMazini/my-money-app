import '../../assets/css/header.css';

import React from 'react';

import Logo from './header/logo';
import Navbar from './header/navbar';
import SidebarButton from './header/sidebarButton';

export default props => (
    <nav className='navbar navbar-expand navbar-dark bg-primary flex-column flex-md-row p-0 shadow'>
        <Logo />
        <SidebarButton />
        <Navbar />
    </nav>
);