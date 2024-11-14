import React from 'react'
import SubscribeBell from '../assets/images/icons/subscribe-bell.svg'
const Subscribe = () => {
  return (
    <section aria-label="subscribe-section" className="subscribe-section container">

      <div className="subscribe">

          <div className="sub-bell">
            <img src={SubscribeBell} alt="Subscribe bell" className="bell" />
            <h2 className="subscribe-text">Subscribe to our newsletter<span className="d-text"> to stay informed about latest updates</span></h2>
          </div>
          <div className="subscribe-form">
            <input className="input-field" type="email" placeholder="Your email" />
            <button className="btn-subscribe">Subscribe</button>
          </div>

      </div>

    </section>
  )
}

export default Subscribe