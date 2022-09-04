import {Component} from 'react'
import './SearchImplementation.css'

class SearchImplementation extends Component {
  render() {
    const {historyList, deleteHistory} = this.props
    const {domainUrl, title, logoUrl, timeAccessed, id} = historyList

    const onDelete = () => {
      deleteHistory(id)
    }

    return (
      <li className="history-items-container">
        <p>{timeAccessed}</p>
        <div className="name-container">
          <img alt="domain logo" className="logo" src={logoUrl} />
          <p>{title}</p>
          <p className="url">{domainUrl}</p>
        </div>
        <div className="button-container">
          <button testid="delete" onClick={onDelete} type="button">
            <img
              className="delete-img"
              alt="delete"
              src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
            />
          </button>
        </div>
      </li>
    )
  }
}

export default SearchImplementation
