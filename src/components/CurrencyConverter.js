import ExchangeRate from "./ExchangeRate";
import { useState } from 'react'
import axios from 'axios'

const CurrencyConverter = () => {
  const currencies= ['BTC', 'ETH', 'DOGE', 'USD', 'LTC', 'ADA' ]
  const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC')
  const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC')
  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState(0)
  const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState('BTC')
  const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState('BTC')
  const [result, setResult] = useState(0)
  

  const convert = () => {

    const options = {
      method: 'GET',
      url: 'https://alpha-vantage.p.rapidapi.com/query',
      params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
      headers: {
        'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_RAPID_API_KEY
      }
    }

    axios.request(options).then((response) =>{
      console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"])
      setPrimaryCurrencyExchanged(chosenPrimaryCurrency)
      setSecondaryCurrencyExchanged(chosenSecondaryCurrency)
    }).catch((error) =>{
      console.error(error)
    })
  }
  
  return (
    <div className="currency-converter">
      <h2>CurrencyConverter</h2>

      <div className="input-box">
        <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input 
                type="number" 
                name="currency-amount-1" 
                value={amount}
                onChange={(e) => setAmount(e.target.value)}/>
              </td>
              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currency-opt-1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                >
                  {/* Using JAvaspript 'map' to map array of currencies to options menu */}
                  {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </td>
            </tr>
            <tr>
              <td>Secondary Currency</td>
              <td>
                <input type="number" name="currency-amount-2" value={result} disabled={true}/>
              </td>
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-opt-2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}
                >
                  {/* Using JAvaspript 'map' to map array of currencies to options menu */}
                  {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </td>
            </tr>
          </tbody>
        </table>

        <button className="convert-butt" onClick={convert}>Convert</button>
      </div>
      <ExchangeRate 
        exchangeRate={exchangeRate}
        chosenPrimaryCurrency={primaryCurrencyExchanged}
        chosenSecondaryCurrency={secondaryCurrencyExchanged}
      />
    </div>
  );
};

export default CurrencyConverter;
