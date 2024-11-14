import React from 'react'
import iPhoneLeft from '../assets/images/iphone-left.svg'
import iPhoneMid from '../assets/images/iphone-mid.svg'
import iPhoneRight from '../assets/images/iphone-right.svg'

const HowDoesItWork = () => {
  return (
    <section aria-label="How does it work" className="carousel-section">
      <div className="container space-y-3">
        <h2 className="h1">How Does It Work?</h2>
        <div className="carousel">
          <div className="carousel-item">
            <img src={iPhoneLeft} alt="iphone left" />
          </div>

          <div className="carousel-item">
            <img src={iPhoneMid} alt="iphone mid" />
          </div>

          <div className="carousel-item">
            <img src={iPhoneRight} alt="iphone right" />
          </div>
        </div>


        <div className="text-mobile">
          <h2 className="h4"> Transfers to people from<br />
            your contact list</h2>
          <p className="mobile-subtext"> Proin volutpat mollis egestas. Nam luctus facilisis
            ultrices. Pellentesque volutpat ligula est. Mattis
            fermentum, at nec lacus</p>
        </div>
        <div className="text-tablet">
          <h2 className="h4"> Step 3. Transfers to people from your <br />
            contact list</h2>
          <p className="tablet-subtext"> Proin volutpat mollis egestas. Nam luctus facilisis ultrices. <br />
            Pellentesque volutpat ligula est. Mattis fermentum, at nec <br />
            lacus.</p>
        </div>

        <div className="text-desktop">
          <h2 className="h4">Latest transaction history</h2>
          <p> Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. Arcu sociis tristique quisque hac in
            consectetur condimentum. </p>
        </div>

      </div>


    </section>
  )
}

export default HowDoesItWork