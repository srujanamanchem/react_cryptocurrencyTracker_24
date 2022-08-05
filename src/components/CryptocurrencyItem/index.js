import './index.css'

const CryptocurrencyItem = props => {
  const {ccItem} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = ccItem
  return (
    <li className="cc-item">
      <div className="logo-name-info">
        <img src={currencyLogo} alt={currencyName} className="logo-image" />
        <p className="name">{currencyName}</p>
      </div>
      <div className="coin-value-info">
        <p className="coin-value">{usdValue}</p>
        <p className="coin-value">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
