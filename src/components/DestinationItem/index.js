// Write your code here
import './index.css'

const DestinationItem = props => {
  const {destinationDetails} = props
  const {imgUrl, name} = destinationDetails

  return (
    <li className="list-container">
      <img src={imgUrl} alt={name} className="destination-img" />
      <p className="para">{name}</p>
    </li>
  )
}

export default DestinationItem
