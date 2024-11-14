import React from 'react'
import SubscribeBell from '../assets/images/icons/subscribe-bell.svg'
const Subscribe = () => {
  return (
    <section aria-label="subscribe-section" class="subscribe-section container">

      <div class="subscribe">

          <div class="sub-bell">
            <img src={SubscribeBell} alt="Subscribe bell" class="bell" />
            <h2 class="subscribe-text">Subscribe to our newsletter<span class="d-text"> to stay informed about latest updates</span></h2>
          </div>
          <div class="subscribe-form">
            <input class="input-field" type="email" placeholder="Your email" />
            <button class="btn-subscribe">Subscribe</button>
          </div>

      </div>

    </section>
  )
}

export default Subscribe