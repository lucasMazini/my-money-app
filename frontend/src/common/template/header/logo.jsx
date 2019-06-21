import React from 'react';
import { Link } from 'react-router-dom';

export default props => (
    <div id='background-logo'>
        <Link to='/' className='navbar-brand mr-0 mr-md-2'>
            <span>
                <i className='fa fa-money-bill-wave'></i>
                <b> My</b>Money
            </span>
        </Link>
    </div>
);