import React, { useEffect, useState } from 'react';
import PhoneIcon from '../assets/images/icons/phone-icon.svg';
import WhatsappIcon from '../assets/images/icons/whatsapp-icon.svg';
import Accordion from './Accordion';

const FAQ = () => {
  const [accordions, setAccordions] = useState([]);

  const fetchAccordions = async () => {
    const res = await fetch(
      'https://win24-assignment.azurewebsites.net/api/faq'
    );
    const data = await res.json();
    setAccordions(data);
  };

  useEffect(() => {
    fetchAccordions();
  }, []);

  return (
    <section aria-label="FAQ" className="faq-section container">
      <div className="faq-window">
        <h2 className="faq-headline">Any questions? Check out the FAQs</h2>
        <p className="faq-mobile-subtext">
          Still have unanswered questions and need to get in touch?
        </p>
      </div>

      <div className="faq-accordion">
        {accordions.map((item) => (
          <Accordion key={item.id} item={item} />
        ))}
      </div>

      <div className="contact-container s14">
        <button className="contact-card">
          <img src={PhoneIcon} alt="Phone Icon" />
          <p>Still have questions?</p>
          <a id="t-blue" className="sb" href="#">
            Contact us <i className="fa-solid fa-arrow-right"></i>
          </a>
        </button>

        <button className="contact-card">
          <img src={WhatsappIcon} alt="Whatsapp Icon" />
          <p>Don't like questions?</p>
          <a id="t-green" className="sb" href="#">
            Contact us <i className="fa-solid fa-arrow-right"></i>
          </a>
        </button>
      </div>

      <div className="contact">
        <div className="container">
          <button className="btn btn-primary">
            <label>Contact us now</label>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;