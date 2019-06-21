import React from 'react';

const CheckboxAuth = props => (
    <div className='custom-control custom-checkbox'>
        <input {...props.input} className='custom-control-input' type={props.type} id={props.id} value={props.value} />

        <label htmlFor={props.htmlFor} className='custom-control-label'>{props.label}</label>
    </div>
);

export { CheckboxAuth };