import '../../assets/css/footer.css';

import React from 'react';

export default props => (
    <footer className='page-footer'>
        <div className='pull-right d-none d-md-block'>
            <b>Versão:</b> 0.1.0
        </div>
        <strong>
            Copyright &copy; 2019 <i className='fa fa-money-bill-wave'></i> MyMoney.
        </strong>
    </footer>
);