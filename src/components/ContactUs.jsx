import React from "react";
import { useForm } from "react-hook-form";
import Map from '../assets/images/map.svg';
import eMail from '../assets/images/icons/mail.svg';
import Career from '../assets/images/icons/career.svg';
import mappin from '../assets/images/icons/mappin.svg';
import clock from '../assets/images/icons/clock.svg';
import smallphone from '../assets/images/icons/smallphone.svg';
import facebook from '../assets/images/icons/facebook.svg';
import twitter from '../assets/images/icons/twitter.svg';
import instagram from '../assets/images/icons/instagram.svg';
import youtube from '../assets/images/icons/youtube.svg';

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    alert("Appointment made successfully!");
  };

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
                <img src={eMail} alt="Email icon" />
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
                <img src={Career} alt="Career icon" />
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                type="text"
                placeholder="Full name"
                {...register("fullName", { required: "Full name is required" })}
              />
              {errors.fullName && <p className="error">{errors.fullName.message}</p>}
            </div>
            <div>
              <input
                type="email"
                placeholder="Email address"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
              />
              {errors.email && <p className="error">{errors.email.message}</p>}
            </div>
            <div>
              <select
                {...register("specialist", { required: "Please select a specialist" })}
              >
                <option value="" disabled>
                  Select Specialist
                </option>
                <option value="Financial Advisor">Financial Advisor</option>
                <option value="Cryptoscammer">Crypto Specialist</option>
              </select>
              {errors.specialist && <p className="error">{errors.specialist.message}</p>}
            </div>
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
      <p>
        <img src={mappin} alt="Location" className="icon" />
        4517 Washington Ave, Manchester, Kentucky 39495
      </p>
      <p>
        <img src={smallphone} alt="Phone" className="icon" />
        (406) 555-0120
      </p>
      <p>
        <img src={clock} alt="Clock" className="icon" />
        <strong>Mon - Fri</strong>: 9:00 am - 22:00 pm
      </p>
      <p>
        <img src={clock} alt="Clock" className="icon" />
        <strong>Sat - Sun</strong>: 9:00 am - 20:00 pm
      </p>
    </div>
    <div className="center">
      <h3>Medical Center 2</h3>
      <p>
        <img src={mappin} alt="Location" className="icon" />
        2464 Royal Ln, Mesa, New Jersey 45463
      </p>
      <p>
        <img src={smallphone} alt="Phone" className="icon" />
        (406) 544-0123
      </p>
      <p>
        <img src={clock} alt="Clock" className="icon" />
        <strong>Mon - Fri</strong>: 9:00 am - 22:00 pm
      </p>
      <p>
        <img src={clock} alt="Clock" className="icon" />
        <strong>Sat - Sun</strong>: 9:00 am - 20:00 pm
      </p>
    </div>
    <div className="social-media">
      <a href="#" aria-label="Facebook">
        <img src={facebook} alt="Facebook" />
      </a>
      <a href="#" aria-label="Twitter">
        <img src={twitter} alt="Twitter" />
      </a>
      <a href="#" aria-label="Instagram">
        <img src={instagram} alt="Instagram" />
      </a>
      <a href="#" aria-label="YouTube">
        <img src={youtube} alt="YouTube" />
      </a>
    </div>
  </div>
</div>



    </section>
  );
};

export default ContactPage;