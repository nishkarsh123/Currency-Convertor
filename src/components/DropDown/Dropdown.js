import classes from './Dropdown.module.css';
import React from 'react';
import CurrencyList from '../CurrencyList/CurrencyList';
import { parse } from 'papaparse';
const Dropdown = (props) => {
    const{
      toCurrency,
      mapped_array,
      forDownload
    }=props;
    const [highlighted, setHighlighted] = React.useState(false);
    const [currency, setCurrency] =React.useState([]);
    const boxclasses=`${classes.summary} ${highlighted?classes.hover:''}`;
    const downloadHandler=(data) =>{
      forDownload(data);
}
  return (
      <main>
    <div className={boxclasses}
    onDragEnter={()=>{setHighlighted(true);}}
    onDragLeave={()=>{setHighlighted(false);}}
    onDragOver={(e)=>{
        e.preventDefault();
    }}
    onDrop={(e)=>{
        e.preventDefault();
        setHighlighted(false);
        Array.from(e.dataTransfer.files).filter(
            file => file.type ==="text/csv"
            ).forEach(async (file) => {
                const text=await file.text();
                const val= parse(text, {header: true});
                setCurrency(existing => [...existing, ...val.data]);
            });
    }}>
     DROP HERE
    </div>
    <CurrencyList mapped_array={mapped_array} toCurrency={toCurrency} value={currency} forDownload={downloadHandler}/>
    </main>
  );
};

export default Dropdown;