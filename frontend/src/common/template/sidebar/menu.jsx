import React from 'react';

import MenuItem from './menuItem';

export default props => (
    <ul className='list-group text-white'>
        <MenuItem path='/' label='Perfil' icon='user' />
    </ul>
);