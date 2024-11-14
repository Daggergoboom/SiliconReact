import React from 'react'
import Quotes from '../assets/images/icons/quotes.svg'
import FourStars from '../assets/images/icons/four-stars.svg'
import Fannie from '../assets/images/icons/fannie-girl.svg'
import FiveStars from '../assets/images/icons/five-stars.svg'
import Albert from '../assets/images/icons/albert-man.svg'

const Testimonials = () => {
  return (
    <section aria-label="Testimonials" className="testimonials-section">
      <div className="container">
        <div className="heading">
          <h2>Clients are<br /> Loving Our App</h2>
        </div>
        <div className="testi-container">
          <div className="testi-card">
            <div className="quote-icon">
              <img src={Quotes} alt="Quote icon" />
            </div>
            <div className="rating">
              <img src={FourStars} alt="4 stars" className="stars" /> 
            </div>
            <p className="testi-text">Sit pretium aliquam tempor, orci dolor sed maecenas rutrum sagittis. Laoreet posuere
              rhoncus, egestas lacus, egestas justo aliquam vel. Nisi vitae lectus hac hendrerit. Montes justo turpis sit
              amet.</p>
            <div className="user-info">
              <img src={Fannie} alt="Fannie Summers" className="avatar" />
              <div>
                <h4>Fannie Summers</h4>
                <p>Designer</p>
              </div>
            </div>
          </div>
          <div className="testi-card">
            <div className="quote-icon">
              <img src={Quotes} alt="Quote icon" />
            </div>
            <div className="rating">
              <img src={FiveStars} alt="5 stars" className="stars" /> 
            </div>
            <p className="testi-text">Nunc senectus leo vel venenatis accumsan vestibulum sollicitudin amet porttitor. Nisl
              bibendum nulla tincidunt eu enim ornare dictumst sit amet. Dictum pretium dolor tincidunt egestas eget nunc.
            </p>
            <div className="user-info">
              <img src={Albert} alt="Albert Flores" className="avatar" />
              <div>
                <h4>Albert Flores</h4>
                <p>Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials