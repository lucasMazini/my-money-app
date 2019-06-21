import '../../../assets/css/content.css';

import React from 'react';

export default props => (
    <section className='header-content'>
        <h1>{props.title} <small>{props.small}</small></h1>
    </section>
);