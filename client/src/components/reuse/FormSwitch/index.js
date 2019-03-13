import React from "react";
import styles from "./FormSwitch.scss";
import Typography from "../Typography";

const FormSwitch = ({ name, children, onChange, checked, value, onText, offText }) => (
    <div className={styles.FormSwitch}>
        <label htmlFor={name}>
            <input 
                onChange={onChange} 
                className={styles.SwitchInput} 
                id={name}
                name={name}
                type="checkbox"
                checked={checked}
                value={value}
            />

            <div className={`${styles.Switch} ${checked ? styles.On : styles.Off}`}>
                <div className={styles.SwitchText}>
                    <Typography align="center" color="secondary" type="body">
                        {checked ? onText : offText}
                    </Typography>
                </div>
                <div className={styles.Handle}></div>
            </div>
            {children}
        </label>
    </div>
)

export default FormSwitch;
