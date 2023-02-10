import React from 'react';
import classes from './OptionList.module.css';
const OptionList= (props) =>{
   const {selectOption,
          onchangeOption,
            }=props
return <div className={classes.Option}>
    <select className={classes.select} onChange={onchangeOption}>
        {selectOption.map(option =>(
            <option key={option} value={option}>{option}</option>
        ))}
         </select>
</div>
}

export default OptionList;
