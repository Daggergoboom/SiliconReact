import React from 'react'
import PhoneIcon from '../assets/images/icons/phone-icon.svg'
import WhatsappIcon from '../assets/images/icons/whatsapp-icon.svg'
const FAQ = () => {
  return (
    <section aria-label="FAQ" className="faq-section container">

      <div className="faq-window">
        <h2 className="faq-headline">Any questions? Check out the FAQs</h2>
        <p className="faq-mobile-subtext">Still have unanswered questions and need to get in touch?</p>
      </div>

      
      
      <div className="faq-accordion">

        <div className="faq">

          <div className="question">
            <h2 className="h3"> Is any of my personal information stored in the App? </h2>
            <button className="faq-down-btn">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          
 
          <div className="answer">
                <p className="h6">Nunc duis id aenean gravida tincidunt eu, tempor
                ullamcorper. Viverra aliquam arcu, viverra et,
                cursus. Aliquet pretium cursus adipiscing gravida
                et consequat lobortis arcu velit. Nibh pharetra
                fermentum duis accumsan lectus non. Massa
                cursus molestie lorem scelerisque pellentesque.
                Nisi, enim, arcu purus gravida adipiscing euismod
                montes, duis egestas. Vehicula eu etiam quam
                tristique tincidunt suspendisse ut consequat.
                {/* There was <br> <br> here before but it gave errors */}
                Ornare senectus fusce dignissim ut. Integer
                consequat in eu tortor, faucibus et lacinia
                posuere. Turpis sit viverra lorem suspendisse
                lacus aliquam auctor vulputate. Quis egestas
                aliquam nunc purus lacus, elit leo elit facilisi.
                Dignissim amet adipiscing massa integer.</p>
                
          
        </div>

        <div className="faq">
          <div className="question">
            <h2 className="h3"> What formats can I download my transaction history in? </h2>
            <button className="faq-down-btn">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="answer">
            <p className="h6">Lorem ipsum dolor sit amet.</p>
          </div>

        </div>

        <div className="faq">
          <div className="question">
            <h2 className="h3">Can I schedule future transfers?</h2>
            <button className="faq-down-btn">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="answer">
            <p className="h6">Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus. Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse ut consequat.</p>
          </div>
        </div>

        <div className="faq">
          <div className="question">
            <h2 className="h3">When can I use Banking App services? </h2>
            <button className="faq-down-btn">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="answer">
            <p className="h6">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="faq">
          <div className="question">
            <h2 className="h3">Can I create my own password that is easy for me to remember? </h2>
            <button className="faq-down-btn">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="answer">
            <p className="h6">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        <div className="faq">
          <div className="question">
            <h2 className="h3"> What happens if I forget or lose my password?</h2>
            <button className="faq-down-btn">
              <i className="fa-solid fa-chevron-down"></i>
            </button>
          </div>
          <div className="answer">
            <p className="h6">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        </div>
      </div>


      <div className="contact-container s14">
        <button className="contact-card">
          <img src={PhoneIcon} />
          <p>  Still have questions? </p>
          <a id="t-blue" className="sb" href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a> 
        </button>
      
        <button className="contact-card">
          <img src={WhatsappIcon} />
          <p> Don't like questions? </p>
          <a id="t-green" className="sb" href="#">Contact us <i className="fa-solid fa-arrow-right"></i></a>
        </button>
      </div>


      <div className="contact">
        <div className="container">
          <button className="btn btn-primary">
            <label> Contact us now</label>
          </button>
        </div>       
      </div>
    </section>
  )
}

export default FAQ