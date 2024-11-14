import React from 'react'
import Checkmark from '../assets/images/icons/checkmark.svg'
import Arrow from '../assets/images/icons/arrow.svg'
import MoneyGraph from '../assets/images/money-graph.svg'
import ChatCreditCard from '../assets/images/chat-credit-card.svg'
import UglyCreditCard from '../assets/images/icons/ugly-credit-card.svg'
import CoffeeCup from '../assets/images/icons/coffee-cup-filled-with-ice.svg'

const InfoSection = () => {
  return (
    <div className="info-container">
      <div className="container">
   
        <section aria-label="Info" className="info-section">
          <div className="text-content move-right">
            <h2 className="h2">Make your money transfer simple and clear</h2>
            <ul>
              <li><img src={Checkmark} alt="Checkmark" /> Banking transactions are free for you</li>
              <li><img src={Checkmark} alt="Checkmark" /> No monthly cash commission</li>
              <li><img src={Checkmark} alt="Checkmark" /> Manage payments and transactions online</li>
            </ul>
            <a href="#" className="button">
              Learn more
              <img src={Arrow} alt="Arrow icon" />
            </a>
          </div>
          <div className="image-content">
            <img src={MoneyGraph} alt="Graph" />
          </div>
        </section>
    
        <section aria-label="Info" className="info-section">
          <div className="image-content feature-2">
            <img src={ChatCreditCard} alt="Contacts" />
          </div>
          <div className="text-content">
            <h2 className="h2">Receive payment from international bank details</h2>
            <div className="features">
              <div className="feature">
                <img src={UglyCreditCard} alt="Icon" />
                <p>Manage your payments online. Mollis congue egestas egestas fermentum fames.</p>
              </div>
              <div className="feature">
                <img src={CoffeeCup} alt="Icon" />
                <p>A elementur and imperdiet enim, pretium etiam facilisi aenean quam mauris.</p>
              </div>
            </div>
            <a href="#" className="button">
              Learn more
              <img src={Arrow} alt="Arrow icon" />
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default InfoSection