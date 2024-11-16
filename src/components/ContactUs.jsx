import React from "react";
import Navbar from "../components/MainNav.jsx";
import Map from '../assets/images/map.svg';
import eMail from '../assets/images/icons/mail.svg';
import Career from '../assets/images/icons/career.svg';

const ContactPage = () => {
  return (
    
    <section className="contact-page">
      <div className="breadcrumbs">
        <a href="/">Homepage</a> » <span>Contact</span>
      </div>

      <h1 className="page-title">Contact Us</h1>

      <div className="Contact-wrapper">

  <div className="contact-cards">
    <div className="contact-card">
      <div className="contact-card-headline">
        <div className="icon-container">
          <img src={eMail} alt="email icon" />
        </div>
        <div className="text-container">
          <h3>Email us</h3>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
        </div>
      </div>
      <a className="contact-link" href="#">Leave a message →</a>
    </div>

    <div className="contact-card">
      <div className="contact-card-headline">
        <div className="icon-container">
          <img src={Career} alt="career icon" />
        </div>
        <div className="text-container">
          <h3>Careers</h3>
          <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
        </div>
      </div>
      <a className="contact-link" href="#">Send an application →</a>
    </div>
  </div>


  <div className="online-consultation-form">
    <h2>Get Online Consultation</h2>
    <form>
      <input type="text" placeholder="Full name" required />
      <input type="email" placeholder="Email address" required />
      <select required>
        <option value="" disabled selected>Specialist</option>
        <option value="cardiology">Cardiology</option>
        <option value="dermatology">Dermatology</option>
      </select>
      <button type="submit">Make an appointment</button>
    </form>
  </div>
</div>


<div className="map-and-centers">

  <div className="map-container">
    <img src={Map} alt="Map showing medical centers" />
  </div>


  <div className="medical-centers">
    <div className="center">
      <h3>Medical Center 1</h3>
      <p>4517 Washington Ave, Manchester, Kentucky 39495</p>
      <p>(406) 555-0120</p>
      <p>Mon - Fri: 9:00 am - 22:00 pm</p>
      <p>Sat - Sun: 9:00 am - 20:00 pm</p>
    </div>
    <div className="center">
      <h3>Medical Center 2</h3>
      <p>2464 Royal Ln, Mesa, New Jersey 45463</p>
      <p>(406) 544-0123</p>
      <p>Mon - Fri: 9:00 am - 22:00 pm</p>
      <p>Sat - Sun: 9:00 am - 20:00 pm</p>
    </div>
  </div>
</div>
    </section>
  );
};

export default ContactPage;