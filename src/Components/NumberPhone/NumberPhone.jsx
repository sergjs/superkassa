import React, { useState } from "react";
import np from './NumberPhone.module.css';
import { Field, reduxForm } from 'redux-form';
import { maxLength, requiredField } from "../Validate/validate";
import { Input } from "../Validate/Input";
import CodePhone from "../CodePhone/CodePhone";
import config from "../../config.json";
import load from '../../img/loading.gif'

const NumberPhoneForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit} >
            <div className={np.container}>
                <div className={np.code_phone} onClick={(e) => e.stopPropagation()}>
                    <CodePhone flag={props.flag} setFlag={props.setFlag}
                        codeCountry={props.codeCountry} setCodeCountry={props.setCodeCountry} />
                </div>
                <Field
                    component={Input}
                    validate={[requiredField, maxLength]}
                    name='number'
                    placeholder='(___)___ __ __'
                    className={np.phone}
                    type="number" />
                <button className={np.button}> Отправить </button>
            </div>
        </form>
    )
};

const NumberReduxForm = reduxForm({ form: 'contact' })(NumberPhoneForm)

const NumberPhone = (props) => {
    const [flag, setFlag] = useState(false);
    const [codeCountry, setCodeCountry] = useState(Object.values(config)[0]);

    const onSubmit = (formData) => {
        let fullNumber = String(codeCountry + ' ' + formData.number);
        props.postNumber(fullNumber);
        formData.number = '(___)___ __ __'
    };
    console.log(props.isAuth)
    return (
        <div className={np.wrapper} onClick={() => setFlag(false)}>
            <NumberReduxForm flag={flag} setFlag={setFlag} onSubmit={onSubmit}
                codeCountry={codeCountry} setCodeCountry={setCodeCountry} />
            {props.isAuth ?
                <img src={load} alt="" /> : (
                    <table className={np.table_number}>
                        <thead>
                            {props.numbers.map((a, index) =>
                                <tr key={index}>
                                    <td>
                                        {a.number}
                                    </td>
                                </tr>)}
                        </thead>
                    </table>
                )}
        </div>

    );
}
export default NumberPhone;