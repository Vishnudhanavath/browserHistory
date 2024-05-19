import './index.css'

const HistoryItems = props => {
  const {item, onDeleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = item

  const onDelete = () => {
    onDeleteHistory(id)
  }

  return (
    <li className="histroy-container">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" />
      <p>{title}</p>
      <p>{domainUrl}</p>
      <button type="button" data-testid="delete" onClick={onDelete}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItems
