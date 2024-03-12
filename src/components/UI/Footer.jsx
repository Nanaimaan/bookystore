import React from "react";
import "./css/footer.css";

function Footer() {
  return (
    <div className='footer-wrapper'>
      <div className='footer-container'>
        <section className='footer-right'>
          <div className='footer-list'>
            <p className='footer-bold'>Help</p>
            <p className='footer-bold'>Find a Store</p>
            <p className='footer-bold'>Events</p>
            <p className='footer-bold'>Careers</p>
            <p className='footer-bold'>Give us Feedback</p>
          </div>
          <div className='footer-list'>
            <p className='footer-bold'>Social Responsibility</p>
            <p>Sustainability</p>
            <p>Diversity, Equity & Inclusion</p>
          </div>
          <div className='footer-list'>
            <p className='footer-bold'>More information</p>
            <p>Our Company</p>
            <p>Vendors & Authors</p>
          </div>
        </section>
        <section className='footer-left'>
          <h3>Join our email list</h3>
          <p>
            Get exclusive offers, the best in books, and more. You may
            unsubscribe at any time.
          </p>
          <div className='input'>
            <input type='email' className='email' placeholder='Email' />
            <button>Subscribe</button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;
