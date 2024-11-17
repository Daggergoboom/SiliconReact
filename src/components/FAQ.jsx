import React, { useState } from 'react';
import PhoneIcon from '../assets/images/icons/phone-icon.svg';
import WhatsappIcon from '../assets/images/icons/whatsapp-icon.svg';

const FAQ = () => {
  
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqData = [
    {
      id: 1,
      question: 'Is any of my personal information stored in the App?',
      answer:
        'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque.',
    },
    {
      id: 2,
      question: 'What formats can I download my transaction history in?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 3,
      question: 'Can I schedule future transfers?',
      answer:
        'Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus.',
    },
    {
      id: 4,
      question: 'When can I use Banking App services?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 5,
      question: 'Can I create my own password that is easy for me to remember?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
    {
      id: 6,
      question: 'What happens if I forget or lose my password?',
      answer: 'Lorem ipsum dolor sit amet.',
    },
  ];

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id); 
  };

  return (
    <section aria-label="FAQ" className="faq-section container">
      <div className="faq-window">
        <h2 className="faq-headline">Any questions? Check out the FAQs</h2>
        <p className="faq-mobile-subtext">
          Still have unanswered questions and need to get in touch?
        </p>
      </div>

      <div className="faq-accordion">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={`faq ${openFAQ === faq.id ? 'active' : ''}`}
          >
            <div className="question" onClick={() => toggleFAQ(faq.id)}>
              <h2 className="h3">{faq.question}</h2>
              <button className="faq-down-btn">
                <i
                  className={`fa-solid ${
                    openFAQ === faq.id ? 'fa-chevron-up' : 'fa-chevron-down'
                  }`}
                ></i>
              </button>
            </div>

            <div
              className="answer"
              style={{
                maxHeight: openFAQ === faq.id ? '200px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.3s ease',
              }}
            >
              <p className="h6">{faq.answer}</p>
            </div>
          </div>
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