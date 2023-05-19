import './index.css'
import {Component} from 'react'

class DenominationItem extends Component {
  render() {
    const {eachItemObj, onBalance} = this.props
    const {value} = eachItemObj

    const onBalanceWithdraw = () => {
      console.log('agdf')
      onBalance(value)
    }

    return (
      <li className="list-container">
        <button onClick={onBalanceWithdraw} type="button" className="button">
          {value}
        </button>
      </li>
    )
  }
}

export default DenominationItem
