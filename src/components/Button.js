import React from 'react'
import style from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const buttonTypes = {
    primary: "primary",
    secondary: "secondary",
}

function Button({ children, type, variant, ...rest }) {
    return (
        <button type={type === 'submit' ? 'submit' : 'button'} className={getClasses([style.button, style["button--" + buttonTypes[variant]]])} {...rest}> {children}</button >
    )
}

function SelectButton({ value, selectChangeCbk, children, ...rest }) {
    return (
        <select onChange={(e) => selectChangeCbk(e.target.value)}
            value={value}
            className={getClasses([style.button, style.button__select])} {...rest}>{children}</select>
    )
}

export { Button, SelectButton }