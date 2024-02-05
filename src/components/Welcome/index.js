// Write your code here

import {component} from 'react'
import './index.css'

class Welcome extends component {
  state = {isSubscribed: true}

  onSubscribe = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="welcome-container">
        <div>
          <h1 className="welcome-heading">Welcome</h1>
          <p className="welcome-para">Thank you! Happy Learning</p>
        </div>
        {isSubscribed ? (
          <button type="button" onClick={this.onSubscribe}>
            Subscribe
          </button>
        ) : (
          <button type="button" onClick={this.onSubscribe}>
            Subscribed
          </button>
        )}
      </div>
    )
  }
}

export default Welcome
