import React, { useState } from 'react';

const Accordion = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false); // Track open/closed state

  return (
    <div className={`faq ${isOpen ? 'active' : ''}`}>
      <div className="question" onClick={() => setIsOpen(!isOpen)}>
        <h3>{item.title}</h3>
        <button className="faq-down-btn">
          <i
            className={`fa-solid ${
              isOpen ? 'fa-chevron-up' : 'fa-chevron-down'
            }`}
          ></i>
        </button>
      </div>
      {isOpen && (
        <div className="answer">
          <p>{item.content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;