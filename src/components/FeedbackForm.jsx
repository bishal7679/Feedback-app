import { useState, useContext, useEffect } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"

import FeedbackContext from "../context/FeedbackContext"

// function FeedbackForm({handleAdd}) {
function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setbtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(()=> {
    if (feedbackEdit.edit === true) {
      setbtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  const handleTextChange = (e)=> {
    if (text === '') {
      setMessage(null)
      setbtnDisabled(true)
    } else if (text !== '' && text.trim().length <=10) {
      setMessage('Text must be atleast 10 characters')
      setbtnDisabled(true)
    } else {
      setMessage(null)
      setbtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e)=> {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback)
      } else {
        addFeedback(newFeedback)

      }
      setText('')
    }

  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating)=> setRating(rating)} />
        <div className="input-group">
          <input type="text" placeholder="write a review" onChange={handleTextChange} value={text} />
          <Button type="submit" isdisabled={btnDisabled}>Send</Button>

        </div>
      </form>
      {message && <div className="message">{message}</div>}
    </Card>
  )
}

export default FeedbackForm