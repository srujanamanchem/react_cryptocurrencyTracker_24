import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

class CryptocurrenciesList extends Component {
  state = {itemsData: [], isLoading: true}

  componentDidMount() {
    this.getItemsData()
  }

  getItemsData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const updatedItems = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({itemsData: updatedItems, isLoading: false})
  }

  render() {
    const {itemsData, isLoading} = this.state

    return isLoading ? (
      <div testid="loader">
        <Loader type="Rings" color="#ffffff" height={80} width={80} />
      </div>
    ) : (
      <div className="cc-list-container">
        <h1 className="cc-heading">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="cc-image"
        />
        <ul className="cc-items-list">
          <li className="cc-header-list">
            <p className="coin-heading">Coin Type</p>
            <div className="coin-value-container">
              <p className="coin-heading">USD</p>
              <p className="coin-heading">EURO</p>
            </div>
          </li>
          {itemsData.map(eachItem => (
            <CryptocurrencyItem ccItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default CryptocurrenciesList
