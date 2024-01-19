// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails

  return (
    <li className={`${className} cards-list-details`}>
      <div className="f-container">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="sec-container">
        <img src={imgUrl} className="image-card" alt={title} />
      </div>
    </li>
  )
}

export default CardItem
