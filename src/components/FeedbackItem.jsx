// import { useState } from 'react'
import { FaTimes, FaEdit } from 'react-icons/fa'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import PropTypes from 'prop-types'

import Card from "./shared/Card"

// function FeedbackItem( {item, handleDelete} ) {
function FeedbackItem( {item} ) {
  const {deleteFeedback, editFeedback} = useContext(FeedbackContext)
  // const [rating, setRating] = useState(7)      --------           // this is called component level state
  // const [text, setText] = useState('This is an example of Feedback item')
  // const handleClick = () => {
  //   setRating((prev) => {
  //     return prev + 1
  //   })
  // }

  
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple' />
      </button>
      <button onClick={()=> editFeedback(item)} className='edit'>
        <FaEdit color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
      {/* <button onClick={handleClick}>Click</button> */}
    </Card>
  )
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default FeedbackItem
