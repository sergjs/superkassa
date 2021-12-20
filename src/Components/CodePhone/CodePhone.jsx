import React from 'react';
import config from "../../config.json"
import co from './CodePhone.module.css'

const CodePhone = ( {flag,setFlag,codeCountry, setCodeCountry} ) => {
    const codeArray = Object.values(config);
    
    const changeСode = (e) => {
        setCodeCountry(e.target.innerHTML);
        setFlag(false);
    }

    return <div >
        <div onClick={() => setFlag(true)}> {codeCountry} </div>
        {
            flag &&
            <div className={co.code_blog} onClick={(e) => changeСode(e)}> 
                {codeArray.map((e, index) => <div key = {index}> {e} </div>)}
            </div>
        }
    </div>
}


export default CodePhone;

