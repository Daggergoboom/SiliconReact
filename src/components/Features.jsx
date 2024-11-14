import React from 'react'
import iPhoneFeatures from '../assets/images/iphone-features.svg'
import CreditCard from '../assets/images/icons/credit-card.svg'
import Shield from '../assets/images/icons/shield.svg'
import Charts from '../assets/images/icons/charts.svg'
import Support from '../assets/images/icons/support.svg'
import Cashback from '../assets/images/icons/cashback.svg'
import Smiley from '../assets/images/icons/smiley.svg'

const Features = () => {
  return (
<section aria-label="app features" className="features">
      <div className="container">
        <div className="iphone">
          <img src={iPhoneFeatures} alt="iphone on features screen" />
        </div>
        <div className="text space-y-1">
          <h2 className="h1">App Features</h2>
          <p className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            volutpat mollis egestas. Nam luctus facilisis ultrices.
            Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon-container">
                <img src={CreditCard} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Easy Payments</h3>
                <p>
                  Id mollis consectetur congue egestas egestas suspendisse
                  blandit justo.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src={Shield} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Data Security</h3>
                <p>
                  Augue pulvinar justo, fermentum fames aliquam accumsan
                  vestibulum non.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src={Charts} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Cost Statistics</h3>
                <p>
                  Mattis urna ultricies non amet, purus in auctor non. Odio
                  vulputate ac nibh.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src={Support} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Support 24/7</h3>
                <p>
                  A elementum, imperdiet enim, pretium etiam facilisi in
                  aenean quam mauris.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src={Cashback} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Regular Cashback</h3>
                <p>
                  Sit facilisis dolor arcu, fermentum vestibulum arcu
                  elementum imperdiet eleifend.
                </p>
              </div>
            </div>
            <div className="feature-card">
              <div className="icon-container">
                <img src={Smiley} alt="" />
              </div>
              <div className="space-y-1">
                <h3 className="h5">Top Standards</h3>
                <p>
                  Faucibus cursus maecenas lorem cursus nibh. Sociis sit
                  risus id. Sit facilisis dolor arcu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </section>
  )
}

export default Features