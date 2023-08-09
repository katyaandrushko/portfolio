import { useState } from 'react'
import './contact.scss'

function Contact() {
  const [message, setMessage] = useState(false)

  const handleSunmit = (e) => {
    e.preventDefault()
    setMessage(true)
  }
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contacts.</h2>
        <form onSubmit={handleSunmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I will reply ASAP! </span>}
        </form>
      </div>
    </div>
  )
}

export default Contact
