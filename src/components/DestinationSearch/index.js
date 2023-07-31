// Write your code here
import {Component} from 'react'

import DestinationItem from '../DestinationItem'

import './index.css'

class DestinationSearch extends Component {
  state = {searchInput: ''}

  onchangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {searchInput} = this.state
    const {destinationsList} = this.props

    const searchResult = destinationsList.filter(eachList =>
      eachList.name.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div className="destination-search-container">
          <h1 className="heading">Destination Search</h1>
          <div className="search-input-container">
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.onchangeSearchInput}
              value={searchInput}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
          <ul className="destination-list">
            {searchResult.map(eachList => (
              <DestinationItem
                destinationDetails={eachList}
                key={eachList.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default DestinationSearch
