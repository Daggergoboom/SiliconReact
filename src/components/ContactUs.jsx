import React from 'react'

const ContactUs = () => {
  return (
<section aria-label="Contact-us" className="contact-us">


<h2 className="Contact-us-headline"> Contact Us</h2>
<h3 className="Sub-headline"> Email us</h3>
<p> Please feel free to drop us a line. We will respond as soon as possible.</p>
<div className="contact-container s14">
        <button className="contact-card">
         <p>  Leave a message </p>
          <a id="t-blue" className="sb" href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a> 
        </button>
</div>
  
</section>
  )
}

export default ContactUs