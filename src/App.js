import Header from './components/Layout/Header';
import Dropdown from './components/DropDown/Dropdown';
import {useState} from 'react';
import {useEffect} from 'react';
function App() {
  const [selectOption, setSelectionOption] = useState([]);
  const [toCurrency, setToCurrency] = useState();
  const [mapped_array, setMapped_array] = useState();
  useEffect(() => {
      fetch ('https://api.freecurrencyapi.com/v1/latest?apikey=9ITfIUxa7AUuZoGkBRsUbDPJ5ljuLFcH0wUoAIzy')
      .then(res =>res.json())
      .then(data => {
          console.log('API CALL');
          setToCurrency("AUD");
          setMapped_array([data.data]);
          setSelectionOption([...Object.keys(data.data)
          ])
      })
  }, []);
  return (
    <div>
  <Header selectOption={selectOption} setToCurrency={setToCurrency}/>
  <main>
    <Dropdown toCurrency={toCurrency} mapped_array={mapped_array}/>
  </main>
  </div>
  );
}

export default App;
