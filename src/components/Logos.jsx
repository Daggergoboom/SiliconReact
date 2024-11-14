import React from 'react'
import Logo1 from '../assets/images/logos/logo1.svg'
import Logo2 from '../assets/images/logos/logo2.svg'
import Logo3 from '../assets/images/logos/logo3.svg'
import Logo4 from '../assets/images/logos/logo4.svg'
import Logo5 from '../assets/images/logos/logo5.svg'
import Logo6 from '../assets/images/logos/logo6.svg'

const Logos = () => {
  return (
    <section aria-label="our customers" className="logos">
    <div className="container">
      <div className="logo-card">
        <img src={Logo1} alt="logo1"/>
      </div>
      <div className="logo-card">
        <img src={Logo2} alt="logo2"/>
      </div>
      <div className="logo-card">
        <img src={Logo3} alt="logo3" />
      </div>
      <div className="logo-card">
        <img src={Logo4} alt="logo4" />
      </div>
      <div className="logo-card">
        <img src={Logo5} alt="logo5" />
      </div>
      <div className="logo-card">
        <img src={Logo6} alt="logo6" />
      </div>
    </div>
  </section>
  )
}

export default Logos