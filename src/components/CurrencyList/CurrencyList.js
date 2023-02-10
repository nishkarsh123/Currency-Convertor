import React from 'react';
import classes from './CurrencyList.module.css';
import Card from '../UI/Card';
import { CSVLink } from 'react-csv';
const CurrencyList=(props)=>{
    let i=0;
    let CurrencyItem = props.value;
    const{
        toCurrency,
        mapped_array,
      }=props;
      CurrencyItem = CurrencyItem.filter(item => !isNaN(mapped_array[0][item.Currency]));
      CurrencyItem.forEach( element => {
          element.ConvertedCurrency=toCurrency
          element.ConvertedAmount=element.Amount*(mapped_array[0][toCurrency]/mapped_array[0][element.Currency])
      });
      const headers=[
          {label:"Name", key:"Name"},
          {label:"Currency", key:"Currency"},
          {label:"Amount", key:"Amount"},
          {label:"TransactionDate", key:"TransactionDate"},
          {label:"ConvertedCurrency", key:"ConvertedCurrency"},
          {label:"ConvertedAmount", key:"ConvertedAmount"}
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
                  <th>Name</th>
                  <th>Currency</th>
                  <th>Amount</th>
                  <th>TransactionDate</th>
                  <th>ConvertedCurrency</th>
                  <th>ConvertedAmount</th>
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