import '../../../assets/css/auth.css';

import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { login } from '../../../actions/auth';
import { InputAuth } from '../../../common/form/input';
import { CheckboxAuth } from '../../../common/form/checkbox';

class Login extends Component {
    render() {
        const { handleSubmit } = this.props;

        return(
            <div className='d-flex justify-content-center backgroundLogin'>
                <form onSubmit={handleSubmit(login)} className='form-access'>
                    <div className='text-center mb-4'>
                        <h1><i className='fa fa-money-bill-wave'></i> MyMoney</h1>
                    </div>

                    <div className='p-2'>
                        <Field component={InputAuth} className='mb-2' type='input' name='login' placeholder='Login' icon='user' />
                        <Field component={InputAuth} className='mb-2' type='password' name='password' placeholder='Senha' icon='lock' />
                        <Field component={CheckboxAuth} type='checkbox' name='keepConnect' id='keepConnect' value='keepConnect' htmlFor='keepConnect' label='Lembre-se de mim' />
                    </div>

                    <div className='pl-2 pr-2 mt-1'>
                        <button type='submit' className='btn btn-outline-light btn-block mb-2'>ACESSAR</button>
                    </div>

                    <div className='text-center'>
                        <p className='mb-1 mt-3'>Não é um membro? Inscreva-se agora!</p>
                    </div>
                </form>
            </div>
        );
    };
};

Login = reduxForm({ form: 'loginForm' })(Login);
const mapDispacthToProps = dispacth => bindActionCreators({ login }, dispacth);
export default connect(null, mapDispacthToProps)(Login);