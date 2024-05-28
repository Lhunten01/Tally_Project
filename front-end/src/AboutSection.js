import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './AboutUS.css';
const AboutSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h2 data-aos="fade-up">About Us</h2>
          </div>
        </div>
        <div className="row about-block justify-content-center">
          <div className="col-lg-6 col-md-9" data-aos="fade-right">
            <div className="about-content">
              <p>
                As small business owners, we spotted a significant gap in accounting operations. We're passionate about bridging this by introducing tech-driven solutions. Our tool aims to streamline accountants' tasks by consolidating client receipts, expense transactions, and overall financial operations. It's designed to create a digital repository for businesses, simplifying expense management for every entrepreneur.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-9" data-aos="fade-left">
            <div className="about-img">
              <img
                src="https://www.expense-tracker.ca/img/about-new.png"
                alt="About"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
