import React from 'react';
import classes from './HeaderCartButton.module.css';
const HeaderCartButton = props => {
    const button_text=props.value;
    return (
        <div>
        <button className={classes.button}> 
            <span> 
                {button_text}
            </span>
        </button>
        </div>
    );
}
export default HeaderCartButton;