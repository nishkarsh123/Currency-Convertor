import React from 'react';
import img from './currency.jpeg';
import classes from './Header.module.css';
import OptionList from '../Options/OptionList';
const Header = props => {
const {selectOption,
        setToCurrency}=props;
    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>Currency Converter</h1>
                <OptionList selectOption={selectOption} onchangeOption={e=> {setToCurrency(e.target.value)
                }}/>
            </header>
            <div className={classes['main-image']}>
                <img src={img} alt='A table full of meals' />
            </div>
        </React.Fragment>
    )
}

export default Header;