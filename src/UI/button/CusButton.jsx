import React from 'react';
import st from './Button.module.css'

const CusButton = ({children, ...props}) => {
    return (
        <button {...props} className={st.button}>
            {children}
        </button>
    );
};

export default CusButton;