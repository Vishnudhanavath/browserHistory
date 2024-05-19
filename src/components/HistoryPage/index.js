import {Component} from 'react'
import './index.css'

import HistoryItem from '../HistroyItems'

class HistoryPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: '',
      track: props.initialHistoryList,
    }
  }

  userSearch = event => {
    this.setState({userInput: event.target.value})
  }

  getFilteredList = () => {
    const {userInput, track} = this.state
    if (userInput !== '') {
      return track.filter(eachItem =>
        eachItem.title.toLowerCase().includes(userInput.toLowerCase()),
      )
    }
    return track
  }

  onDeleteHistory = id => {
    // const {track} = this.state
    this.setState(prevState => ({
      track: prevState.track.filter(eachItem => eachItem.id !== id),
    }))
  }

  render() {
    const {userInput} = this.state
    const filteredList = this.getFilteredList()
    return (
      <div>
        <div className="header-bg">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="image"
          />
          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-icon"
            />
            <input
              placeholder="Search history"
              className="userinput"
              type="search"
              onChange={this.userSearch}
              value={userInput}
            />
          </div>
        </div>
        {filteredList.length !== 0 ? (
          <ul>
            {filteredList.map(eachItem => (
              <HistoryItem
                item={eachItem}
                key={eachItem.id}
                onDeleteHistory={this.onDeleteHistory}
              />
            ))}
          </ul>
        ) : (
          <p>There is no history to show</p>
        )}
      </div>
    )
  }
}
export default HistoryPage
