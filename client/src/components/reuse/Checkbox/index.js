import React from "react";
import { bool, func, string } from "prop-types";
//import Label from "../Label";
import styles from "./Checkbox.scss";

const Checkbox = ({ className, label, checked, onChange, value}) => {
    return (

            <input 
            className={className ? `${styles.Checkbox} ` + className : styles.Checkbox} 
            type="checkbox" 
            value={value}
            checked={checked ? true : false}
            onChange={onChange}
            />
    );
}
    
Checkbox.propTypes = {
    className: string,
    label: string,
    value: string,
    checked: bool.isRequired,
    onChange: func.isRequired,
}

export default Checkbox;
//        <Label text={props.label}>