import React from 'react';

export default props => (
    <div className='flex-row ml-md-auto d-none d-md-flex'>
        <ul className='navbar-nav mr-3'>
            <li className='dropdown'>
                <a className='btn dropdown-toggle text-white' href='#' role='button' id='dropdownMenuLink' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
                    <img className='avatar-mini-image mr-1' src='http://lorempixel.com/160/160/abstract' />
                    <span className='mr-2'>Lucas</span>
                </a>

                <div id='avatar-dropdown' className='dropdown-menu dropdown-menu-right text-white'>
                    <button className='dropdown-item'><i className='fa fa-user mr-2'></i> Perfil</button>
                    <button className='dropdown-item'><i className='fa fa-calendar-alt mr-2'></i> Agenda</button>

                    <div className='dropdown-divider'></div>

                    <button className='dropdown-item'>Sign out</button>
                </div>
            </li>
        </ul>
    </div>
);