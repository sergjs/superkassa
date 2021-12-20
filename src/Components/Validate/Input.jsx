import style from './Input.module.css';
import React from 'react';

const FormControl = ({ input, meta, child, ...props }) => {
    let hasError = meta.touched && meta.error;
    return ( <div >
        <div className={hasError ? style.form_control : ''} >
        {props.children}
        </div>
        <div>
            {hasError && <span className={style.some_error}>{meta.error}</span>}
        </div>
    </div>
    )
}

export const Input = (props) => {
    let { input, meta, child, ...restProps } = props;
    return <FormControl {...props}> <input {...input} {...restProps} /> </FormControl>
}

