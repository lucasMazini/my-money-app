import React from 'react';

const InputAuth = props => (
    <div className={`input-group ${props.className}`}>
        <div className='input-group-prepend'>
            <span className='input-group-text'><i className={`fa fa-${props.icon}`}></i></span>
        </div>
        <input {...props.input} className='form-control' placeholder={props.placeholder} type={props.type} required />
    </div>
);

export { InputAuth };