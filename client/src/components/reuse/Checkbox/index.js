import React, { Fragment } from "react";
import { bool, func, string } from "prop-types";
import Label from "../Label";
import styles from "./Checkbox.scss";

const Checkbox = ({ className, name, label, checked, onChange, value}) => (
    <div className={styles.CheckboxContainer}>
        <input 
        className={className ? `${styles.Checkbox} ` + className : styles.Checkbox} 
        id={name}
        type="checkbox" 
        value={value}
        checked={checked ? true : false}
        onChange={onChange}
        />
        {label && <Label htmlFor={name}>{label}</Label>}
    </div>
);

Checkbox.propTypes = {
    checked: bool.isRequired,
    className: string,
    label: string,
    name: string.isRequired,
    onChange: func.isRequired,
    value: string,
}

export default Checkbox;