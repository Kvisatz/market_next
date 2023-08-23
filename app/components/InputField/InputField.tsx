import Styles from './InputField.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonRifle, faUser } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import checks from './Checks';



const InputField = (obj:{type: string, /*stateApp, setStateApp,*/ placeholder: string, fieldType:{id:number, icon: any, placeholder: string, type: string, checks:any[], name:string}}, ...props: any[]) => {
    fieldType.checks = checksForInput(checks);
    function checksForInput(checks:any) {
        let myChecks = [];
        for(let check of checks){
            // console.log(check)
            for(let trigger of check.triggers){
                
                if(trigger == fieldType.placeholder){
                    myChecks.push(check);
                }
            }
        }
        return myChecks;
    }
    // console.log(refer)
    return (
        <div className={Styles.InputField}>
            <input 
                type={type} 
                placeholder={placeholder}
                className={(!fieldType.valid && fieldType.touch) ? Styles.errorBorder : ''}
                onChange={(event) => {
                        validator(stateApp, setStateApp, fieldType, event.target.value)
                    }
                }
                ref = {refer}
            />
            {(!fieldType.valid && fieldType.touch) ? <p className={Styles.error}>{fieldType.msg}</p> : null}
        </div>
    );
}

export default InputField;
