import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    balance: 2000,
  }

  onBalanceChange = value => {
    this.setState(prevState => ({
      balance: prevState.balance - value,
    }))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state

    return (
      <div className="bg-container">
        <div className="main-container">
          <div className="name-container">
            <p className="profile">S</p>
            <h1 className="name">Safeen Chilumula</h1>
          </div>
          <div className="balance-container">
            <p className="balance-text">Your Balance</p>
            <div className="rupee-container">
              <p className="rupee">{balance}</p>
              <p className="rupee-text">In Rupees</p>
            </div>
          </div>
          <p className="balance-text withdraw">Withdraw</p>
          <p className="balance-text choose">CHOOSE SUM (IN RUPEES)</p>
          <ul className="ul-list-container">
            {denominationsList.map(eachItemObj => (
              <DenominationItem
                onBalance={this.onBalanceChange}
                key={eachItemObj.id}
                eachItemObj={eachItemObj}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
