import React from 'react';
import classes from './CurrencyList.module.css';
import Card from '../UI/Card';
import { CSVLink } from 'react-csv';
const CurrencyList=(props)=>{
    let i=0;
    const CurrencyItem = props.value;
    const{
        toCurrency,
        mapped_array,
      }=props;
      CurrencyItem.forEach( element => {
          element.ConvertedCurrency=toCurrency
          element.ConvertedAmount=element.Amount*(mapped_array[0][toCurrency]/mapped_array[0][element.Currency])   
      });
      const headers=[
          {label:"NAME", key:"Name"},
          {label:"CURRENCY", key:"Currency"},
          {label:"AMOUNT", key:"Amount"},
          {label:"TRANSACTION DATE", key:"TransactionDate"},
          {label:"CONVERTED CURRENCY", key:"ConvertedCurrency"},
          {label:"CONVERTED AMOUNT", key:"ConvertedAmount"}
      ];
      const csvlink = {
          filename: "Amount.csv",
          headers: headers,
          data: CurrencyItem
      }
    return (
    <section className={classes.currency}>
    <Card>
      <table border={1} width="100%" cellPadding={10} className={classes.sticky}>
          <thead>
            <tr className={classes.heading}>
                  <th>NAME</th>
                  <th>CURRENCY</th>
                  <th>AMOUNT</th>
                  <th>TRANSACTION DATE</th>
                  <th>CONVERTED CURRENCY</th>
                  <th>CONVERTED AMOUNT</th>
              </tr>
          </thead>
          <tbody>
          {
          CurrencyItem.map(
              (Currency) => {
                return(
                    <tr key={i++}>
                    <td>{Currency.Name}</td>
                    <td>{Currency.Currency}</td>
                    <td>{Currency.Amount}</td>
                    <td>{Currency.TransactionDate}</td>
                    <td>{Currency.ConvertedCurrency}</td>
                    <td>{Currency.ConvertedAmount}</td>
                    </tr>
                );
           }
    )
           }
          </tbody>
      </table>
      <CSVLink className={classes.linkhover} {...csvlink}> Download</CSVLink>
      </Card>
  </section>
    );
}
export default CurrencyList;