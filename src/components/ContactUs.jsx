import React from 'react'
import eMailIcon from '../assets/images/icons/mail-blue.svg'
import Careers from '../assets/images/icons/career.svg'
const ContactUs = () => {
  return (
    <section aria-label="Contact-us" className="contact-us">
      <h2 className="Contact-us-headline"> Contact Us</h2>

      <div className="Contact-wrapper">


        <div className="contact-card-headline">
          <div className="e-mailIcon">
            <img src={eMailIcon} alt="email icon" />
          </div>
          <h3 className="Sub-headline"> Email us</h3>
          <p>
            {" "}
            Please feel free to drop us a line. We will respond as soon as
            possible.
          </p>
          <div className="contact-container-consult">
            <div className="contact-card">
              <p> Leave a message </p>
              <a id="t-blue" className="sb" href="#">
                Contact us <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="contact-card-headline">
          <h3 className="Sub-headline"> Careers </h3>
          <div className="careerIcon">
            <img src={Careers} alt="Career Icon" />
          </div>
          <p>
            {" "}
            Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.
          </p>
          <div className="contact-container-consult">
            <div className="contact-card">
              <p> Leave a message </p>
              <a id="t-blue" className="sb" href="#">
                Contact us <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="online-consultation-form">
          <h2>Get Online Consultation</h2>
          <form>
            <input type="text" placeholder="Full name" required />
            <input type="email" placeholder="Email address" required />
            <select required>
              <option value="" disabled selected>
                Specialist
              </option>
              <option value="cardiology">Cardiology</option>
              <option value="dermatology">Dermatology</option>
            </select>
            <button type="submit">Make an appointment</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactUs